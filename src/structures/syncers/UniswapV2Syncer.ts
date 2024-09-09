import { Address, Block, checksumAddress, decodeEventLog, parseAbiItem } from "viem";
import { Client } from "../Client";
import { Sync } from "../../abis/UniswapV2Pair";

export class UniswapV2Syncer {
    constructor(protected client: Client) { };

    protected async _getSyncEvents(block: Block, pairContracts: Address[], blocksToRetreive: bigint = 1n) {
        const logs = await this.client.params.viem.public.getLogs({
            fromBlock: block.number!,
            toBlock: block.number! + blocksToRetreive,
            address: pairContracts,
            event: parseAbiItem("event Sync(uint112 reserve0, uint112 reserve1)")
        }).catch(e => {
            if (e.status === 429) return;
            throw e;
        });

        if (!logs) return;

        return logs.map(event => ({
            address: checksumAddress(event.address),
            ...decodeEventLog({
                abi: [Sync],
                topics: event.topics,
                data: event.data
            }).args as any
        }));
    }

    async sync(block: Block, blocksToRetreive?: bigint) {
        const uniswapV2Routers = this.client.params.routers.filter(r => r.type === "UniswapV2Router")

        for (const router of uniswapV2Routers) {
            const pairsStorage = await this.client.storage.getUniswapV2PairList(router.address);
            const addresses = await pairsStorage.keys().all();

            const events = await this._getSyncEvents(block, addresses, blocksToRetreive);
            if (!events) continue;

            for (const event of events) {
                const pair = await pairsStorage.get(event.address)!

                if (!pair) continue;

                pair.reserveA = event.reserve0.toString();
                pair.reserveB = event.reserve1.toString();
                pair.updatedAtBlock = block.number!.toString();

                await pairsStorage.put(event.address, pair);
            };
        };
    };
};