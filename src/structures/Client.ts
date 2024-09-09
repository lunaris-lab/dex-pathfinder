import { Address, Block } from "viem";
import { IClientParams, ISwapParams, ISwapResult } from "../types/Client";
import { PairsFetcher } from "./fetchers";
import { PairsSyncer } from "./syncers";
import { Utils } from "./Utils";
import { Storage } from "./Storage";
import { Path } from "./Path";
import { IGraphLinkItem } from "../types/Storage";

export class Client {
    public currentBlock?: bigint;
    public pairsFetcher: PairsFetcher;
    public pairsSyncer: PairsSyncer;
    public utils: Utils;
    public storage: Storage;

    // Necessary variables for DFS and swap functions
    protected dfsCache = new Map();

    constructor(public params: IClientParams) {
        this.storage = new Storage(this);
        this.utils = new Utils(this);
        this.pairsFetcher = new PairsFetcher(this);
        this.pairsSyncer = new PairsSyncer(this);
    };

    async init() {
        await this.storage.init();
    }

    protected async dfs(current: Address, target: Address, remainingSteps: number) {
        // If we reach the target and there are no more steps left
        if (current === target) {
            return [[]];  // return an empty list because the last path should not include a link
        }

        // If we reach the target and there are no more steps left, return an empty list
        // because the last path should not include a link
        if (remainingSteps === 0) {
            return [];
        }

        const key = `${current}-${remainingSteps}`;
        if (this.dfsCache.has(key)) {
            return this.dfsCache.get(key);
        }

        const paths = [];
        const graphStorage = await this.storage.getGraph();
        const neighbors = await graphStorage.get(current) || [];

        for (const link of neighbors) {
            // Call DFS recursively with the token in the link
            const subPaths = await this.dfs(link.token, target, remainingSteps - 1) as any[];
            for (const path of subPaths) {
                paths.push([link, ...path]);
            }
        }

        this.dfsCache.set(key, paths);
        return paths;
    }

    async swap(params: ISwapParams): Promise<ISwapResult> {
        const timeStart = Date.now();
        const depth = params.depth || 3;

        const linksLists = await this.dfs(params.inputToken, params.outputToken, depth - 1);

        // clear cache
        this.dfsCache = new Map<string, any[]>();

        const paths = linksLists.map((links: IGraphLinkItem[]) => new Path(this, links, params.inputToken));
        const outputs = await Promise.all(paths.map(async (path: Path) => ({
            output: await path.getOutputAmount(params.inputAmount),
            path
        })));

        const sortedPaths = outputs.sort((a, b) => (a.output < b.output ? 1 : (a.output > b.output ? -1 : 0))).map(p => p.path);

        return {
            inputToken: params.inputToken,
            outputToken: params.outputToken,
            paths: sortedPaths,
            calculedAt: Date.now(),
            calculationTime: Date.now() - timeStart,
        }
    };

    protected async _onBlock(block: Block, retry: number = 5) {
        this.pairsFetcher.pause();

        const configStorage = await this.storage.getConfig();
        const lastUpdatedBlock = await configStorage.get('lastUpdatedBlock') || block.number!.toString();

        const missingBlocks = this.currentBlock! - BigInt(lastUpdatedBlock)
        const blocksToRetreive = BigInt(Math.min(parseInt(missingBlocks.toString()), 100))
        const isUpToDate = BigInt(lastUpdatedBlock) === block.number! - 1n

        if (!isUpToDate) {
            await this.pairsSyncer.sync({
                ...block,
                number: BigInt(lastUpdatedBlock),
            }, blocksToRetreive);

            const updatedAtBlock = BigInt(lastUpdatedBlock) + blocksToRetreive

            if (retry > 0) {
                const lastBlock = await this.params.viem.public.getBlock({ blockNumber: updatedAtBlock });
                await configStorage.put('lastUpdatedBlock', updatedAtBlock.toString());
                await this._onBlock(lastBlock, retry - 1);
            }
        } else {
            await this.pairsSyncer.sync(block);
            await configStorage.put('lastUpdatedBlock', block.number!.toString());
        };

        this.pairsFetcher.unPause();
    }

    async sync() {
        this.currentBlock = await this.params.viem.public.getBlockNumber();

        this.params.viem.public.watchBlocks({
            onBlock: (block) => {
                this.currentBlock = block.number!;
                this._onBlock(block);
            }
        });

        await this.pairsFetcher?.fetchPairs();
    };
}