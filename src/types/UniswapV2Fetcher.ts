import { UniswapV2Pair } from "../structures/contracts/UniswapV2Pair";
import { IRouterConfig } from "./Client";
import { IUniswapV2PairListItem } from "./Storage";

export interface IUniswapV2FetchedPairEventData {
    router: IRouterConfig,
    pair: UniswapV2Pair,
    progress: number,
    total: number
};

export interface IUniswapV2IndexedPairEventData {
    router: IRouterConfig,
    pair: IUniswapV2PairListItem,
    progress: number,
    total: number
};

export interface IUniswapV2FetcherEvents {
    fetchedPair: (data: IUniswapV2FetchedPairEventData) => void;
    finished: () => void;
    error: (error?: Error | null, message?: string | null) => void;
    indexedPair: (data: IUniswapV2IndexedPairEventData) => void
};