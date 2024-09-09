import { IUniswapV2FactoryEvents, IUniswapV2FactoryCreatePairParams, IUniswapV2FactorySetFeeToParams, IUniswapV2FactorySetFeeToSetterParams } from "../../types/contracts/UniswapV2Factory";
import { ContractOperation } from "./ContractOperation";
import { IContractConfig } from "../../types/contracts";
import { Address } from "viem";
import { UniswapV2Pair } from "./UniswapV2Pair";
export declare class UniswapV2Factory {
    protected config: IContractConfig;
    address: Address;
    constructor(config: IContractConfig);
    on<T extends keyof IUniswapV2FactoryEvents>(eventName: T, callback: IUniswapV2FactoryEvents[T]): import("viem").WatchContractEventReturnType;
    allPairs(index: number): Promise<UniswapV2Pair>;
    allPairsLength(): Promise<bigint>;
    createPair(args: IUniswapV2FactoryCreatePairParams): ContractOperation;
    feeTo(): Promise<string>;
    feeToSetter(): Promise<string>;
    getPair(tokenA: string, tokenB: string): Promise<UniswapV2Pair>;
    setFeeTo(args: IUniswapV2FactorySetFeeToParams): ContractOperation;
    setFeeToSetter(args: IUniswapV2FactorySetFeeToSetterParams): ContractOperation;
}
