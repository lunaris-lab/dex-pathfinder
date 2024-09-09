"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Syncer = void 0;
const viem_1 = require("viem");
const UniswapV2Pair_1 = require("../../abis/UniswapV2Pair");
class UniswapV2Syncer {
    constructor(client) {
        this.client = client;
    }
    ;
    async _getSyncEvents(block, pairContracts, blocksToRetreive = 1n) {
        const logs = await this.client.params.viem.public.getLogs({
            fromBlock: block.number,
            toBlock: block.number + blocksToRetreive,
            address: pairContracts,
            event: (0, viem_1.parseAbiItem)("event Sync(uint112 reserve0, uint112 reserve1)")
        }).catch(e => {
            if (e.status === 429)
                return;
            throw e;
        });
        if (!logs)
            return;
        return logs.map(event => ({
            address: (0, viem_1.checksumAddress)(event.address),
            ...(0, viem_1.decodeEventLog)({
                abi: [UniswapV2Pair_1.Sync],
                topics: event.topics,
                data: event.data
            }).args
        }));
    }
    async sync(block, blocksToRetreive) {
        const uniswapV2Routers = this.client.params.routers.filter(r => r.type === "UniswapV2Router");
        for (const router of uniswapV2Routers) {
            const pairsStorage = await this.client.storage.getUniswapV2PairList(router.address);
            const addresses = await pairsStorage.keys().all();
            const events = await this._getSyncEvents(block, addresses, blocksToRetreive);
            if (!events)
                continue;
            for (const event of events) {
                const pair = await pairsStorage.get(event.address);
                if (!pair)
                    continue;
                pair.reserveA = event.reserve0.toString();
                pair.reserveB = event.reserve1.toString();
                pair.updatedAtBlock = block.number.toString();
                await pairsStorage.put(event.address, pair);
            }
            ;
        }
        ;
    }
    ;
}
exports.UniswapV2Syncer = UniswapV2Syncer;
;
