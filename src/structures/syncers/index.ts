import { Block } from "viem";
import { Client } from "../Client";
import { UniswapV2Syncer } from "./UniswapV2Syncer";

export class PairsSyncer {
    public uniswapV2: UniswapV2Syncer;

    constructor(client: Client) {
        this.uniswapV2 = new UniswapV2Syncer(client);
    };

    public async sync(block: Block, blocksToRetreive?: bigint) {
        await this.uniswapV2.sync(block, blocksToRetreive);
    };
}