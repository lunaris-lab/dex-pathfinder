import { Client } from "../Client";
import * as factoryAbi from "../../abis/UniswapV2Factory";
import { Address, RpcError } from "viem";
import { UniswapV2Router02 } from "../contracts/UniswapV2Router02";
import { UniswapV2Pair } from "../contracts/UniswapV2Pair";
import EventEmitter from "events";
import { IUniswapV2FetcherEvents } from "../../types/UniswapV2Fetcher";
import { IGraphLinkItem, IUniswapV2PairListItem } from "../../types/Storage";
import { IRouterConfig } from "../../types/Client";

export class UniswapV2Fetcher {
    protected routersMaxIndex = new Map<Address, number>();
    protected rateLimit: number;
    protected sleepTime: number;
    protected emitter: EventEmitter = new EventEmitter();
    protected isPaused = false;

    constructor(protected client: Client) {
        this.rateLimit = this.client.params.requestsPerSeconds || 100;
        this.sleepTime = 1000 / this.rateLimit;
    };

    async init() {
        const uniswapV2Routers = this.client.params.routers.filter(r => r.type === "UniswapV2Router");

        for (const routerAddress of uniswapV2Routers.map(r => r.address)) {
            const storage = await this.client.storage.getUniswapV2PairList(routerAddress);

            let maxIndex = 0;
            for await (const value of storage.values()) {
                const id = value.id;
                if (maxIndex < id) maxIndex = id;
            }

            this.routersMaxIndex.set(routerAddress, maxIndex);
        }
    };

    public on<T extends keyof IUniswapV2FetcherEvents>(eventName: T, callback: IUniswapV2FetcherEvents[T]) {
        return this.emitter.on(eventName, callback);
    };

    public async fetchPairs() {
        for (const router of this.client.params.routers) {
            await this.fetchV2Pairs(router.address);
            await this.indexPairs(router.address);
        };

        this.emitter.emit('finished');
    };

    public pause() {
        this.isPaused = true;
    };

    public unPause() {
        this.isPaused = false;
    };

    async waitForUnpause() {
        while (this.isPaused) {
            await this.client.utils.sleep(1000)
        }
    }

    protected async indexPairs(routerAddress: Address) {
        const pairsStorage = await this.client.storage.getUniswapV2PairList(routerAddress);
        const graphStorage = await this.client.storage.getGraph();
        const totalPairs = this.routersMaxIndex.get(routerAddress)!

        let progress = 0;

        const cache = new Map<Address, IGraphLinkItem[]>();

        for await (const pair of pairsStorage.values()) {
            const tokenA = pair.tokenA;
            const tokenB = pair.tokenB;

            const linksA = await graphStorage.get(tokenA) || [];
            const linksB = await graphStorage.get(tokenB) || [];

            if (!linksA.find((l: any) => l.pair === pair.address)) {
                linksA.push({ pair: pair.address, router: routerAddress, token: tokenB });
                cache.set(tokenA, linksA);
            }

            if (!linksB.find((l: any) => l.pair === pair.address)) {
                linksB.push({ pair: pair.address, router: routerAddress, token: tokenA });
                cache.set(tokenB, linksB);
            }

            if (progress % 500 === 0 || progress === totalPairs) {
                const batchGraph = graphStorage.batch();

                // Pour chaque élément dans le cache, on l'ajoute au batch
                for (const [key, value] of cache.entries()) {
                    batchGraph.put(key, value);  // Injecte chaque entrée du cache dans le batch
                }

                await batchGraph.write();
            };

            this.emitter.emit('indexedPair', {
                router: {
                    address: routerAddress,
                    type: "UniswapV2Router"
                } as IRouterConfig,
                pair,
                progress: progress++,
                total: totalPairs
            });
        };
    }

    protected async fetchV2Pairs(routerAddress: Address) {
        const router = new UniswapV2Router02({
            address: routerAddress,
            client: this.client.params.viem
        });

        const factory = await router.factory();
        if (!factory) return;

        const totalPairs = await factory.allPairsLength();
        const currentIndex = BigInt(this.routersMaxIndex.get(routerAddress)!);
        const payloadCount = totalPairs - currentIndex;

        // create an array of "length" length of indexes
        const payloads = Array(Number(payloadCount)).fill(0).map((v, i) => ({
            abi: [factoryAbi.allPairs],
            address: factory.address,
            functionName: "allPairs",
            args: [i + Number(currentIndex)]
        })).map((p, i) => ({ payload: p, index: i + Number(currentIndex) }));

        const chunks = [];
        for (let i = 0; i < payloads.length; i += this.rateLimit / 2) chunks.push(payloads.slice(i, i + this.rateLimit / 2));

        for (let a = 0; a < chunks.length; a++) {
            await this.waitForUnpause();
            // sleep is 1000 cause multicall will call "rateLimit" amount of requests
            await this.client.utils.sleep(1000);

            const chunk = chunks[a];

            const pairAddresses = await this.client.params.viem.public.multicall({
                contracts: chunk.map(c => c.payload) as any[],
                allowFailure: false
            }).catch(async (e: RpcError) => {
                this.emitter.emit("error", e, e.details);

                if (e.code !== 429) return

                a--
                await this.client.utils.sleep(5000)
            });

            if (!pairAddresses) continue;

            const pairsStorage = await this.client.storage.get(routerAddress);
            const batchPutPairsInstance = pairsStorage.batch();
            let finished = 0;
            for (let i = 0; i < chunk.length; i++) {
                await this.waitForUnpause();

                const pairAddress = pairAddresses[i];
                await this.client.utils.sleep(this.sleepTime * 3)

                const pair = new UniswapV2Pair({
                    address: pairAddress as Address,
                    client: this.client.params.viem
                });

                pair.fetch().then(async () => {
                    if (!pair.tokenA || !pair.tokenB) return;

                    const reserves = await pair.getReserves();

                    const data = {
                        address: pair.address,
                        tokenA: pair.tokenA?.address,
                        tokenB: pair.tokenB?.address,
                        reserveA: reserves.reserve0.toString(),
                        reserveB: reserves.reserve1.toString(),
                        updatedAtBlock: this.client.currentBlock?.toString(),
                        id: chunk[i].index,
                    };

                    batchPutPairsInstance.put(pair.address, data);
                    const prevChunksFetchs = (a * chunk.length);

                    this.emitter.emit("fetchedPair", {
                        router: {
                            address: router.address,
                            type: "UniswapV2Router"
                        } as IRouterConfig,
                        pair: pair,
                        progress: this.routersMaxIndex.get(router.address)! + prevChunksFetchs + i,
                        total: Number(totalPairs.toString())
                    });
                    finished++
                }).catch(async (e: RpcError) => {
                    this.emitter.emit("error", e, e.details);

                    if (e.code !== 429) return

                    chunk.push(chunk[i]);
                    await this.client.utils.sleep(this.sleepTime * 5);
                });
            };

            while (finished < chunk.length) await this.client.utils.sleep(50);

            await batchPutPairsInstance.write();
        }
    }
}