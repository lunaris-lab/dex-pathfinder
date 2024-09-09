import { Block } from "viem";
import { Client } from "../Client";
import { UniswapV2Syncer } from "./UniswapV2Syncer";
export declare class PairsSyncer {
    uniswapV2: UniswapV2Syncer;
    constructor(client: Client);
    sync(block: Block, blocksToRetreive?: bigint): Promise<void>;
}
