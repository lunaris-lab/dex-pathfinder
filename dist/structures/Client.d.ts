import { Address, Block } from "viem";
import { IClientParams, ISwapParams, ISwapResult } from "../types/Client";
import { PairsFetcher } from "./fetchers";
import { PairsSyncer } from "./syncers";
import { Utils } from "./Utils";
import { Storage } from "./Storage";
export declare class Client {
    params: IClientParams;
    currentBlock?: bigint;
    pairsFetcher: PairsFetcher;
    pairsSyncer: PairsSyncer;
    utils: Utils;
    storage: Storage;
    protected dfsCache: Map<any, any>;
    constructor(params: IClientParams);
    init(): Promise<void>;
    protected dfs(current: Address, target: Address, remainingSteps: number): Promise<any>;
    swap(params: ISwapParams): Promise<ISwapResult>;
    protected _onBlock(block: Block, retry?: number): Promise<void>;
    sync(): Promise<void>;
}
