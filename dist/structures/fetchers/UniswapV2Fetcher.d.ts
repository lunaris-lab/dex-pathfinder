/// <reference types="node" />
import { Client } from "../Client";
import { Address } from "viem";
import EventEmitter from "events";
import { IUniswapV2FetcherEvents } from "../../types/UniswapV2Fetcher";
export declare class UniswapV2Fetcher {
    protected client: Client;
    protected routersMaxIndex: Map<`0x${string}`, number>;
    protected rateLimit: number;
    protected sleepTime: number;
    protected emitter: EventEmitter;
    protected isPaused: boolean;
    constructor(client: Client);
    init(): Promise<void>;
    on<T extends keyof IUniswapV2FetcherEvents>(eventName: T, callback: IUniswapV2FetcherEvents[T]): EventEmitter<[never]>;
    fetchPairs(): Promise<void>;
    pause(): void;
    unPause(): void;
    waitForUnpause(): Promise<void>;
    protected indexPairs(routerAddress: Address): Promise<void>;
    protected fetchV2Pairs(routerAddress: Address): Promise<void>;
}
