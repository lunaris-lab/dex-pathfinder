import { Address, Block } from "viem";
import { Client } from "../Client";
export declare class UniswapV2Syncer {
    protected client: Client;
    constructor(client: Client);
    protected _getSyncEvents(block: Block, pairContracts: Address[], blocksToRetreive?: bigint): Promise<any[] | undefined>;
    sync(block: Block, blocksToRetreive?: bigint): Promise<void>;
}
