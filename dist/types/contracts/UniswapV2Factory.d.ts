import { Address, Log } from "viem";
export interface IUniswapV2FactoryEvents {
    PairCreated: (data: (Log & {
        args: IUniswapV2FactoryPairCreatedEventParams;
    })) => void;
}
export interface IUniswapV2FactoryPairCreatedEventParams {
    token0: string;
    token1: string;
    pair: string;
    index: number;
}
export interface IUniswapV2FactoryCreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IUniswapV2FactorySetFeeToParams {
    to: Address;
}
export interface IUniswapV2FactorySetFeeToSetterParams {
    to: Address;
}
