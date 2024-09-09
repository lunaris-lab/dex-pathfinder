import { Client } from "../Client";
import { UniswapV2Fetcher } from "./UniswapV2Fetcher";
export declare class PairsFetcher {
    uniswapV2: UniswapV2Fetcher;
    constructor(client: Client);
    fetchPairs(): Promise<void>;
    pause(): void;
    unPause(): void;
}
