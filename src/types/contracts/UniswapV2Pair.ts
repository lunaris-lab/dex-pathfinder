import { ERC20 } from "@lunarislab/web3tokens";
import { ContractOperation } from "../../structures/contracts/ContractOperation";
import { Log, WatchContractEventReturnType } from "viem";

export interface IUniswapV2PairEvents {
  Approval: (data: (Log & { args: IUniswapV2PairApprovalEventParams })) => void;
  Burn: (data: (Log & { args: IUniswapV2PairBurnEventParams })) => void;
  Mint: (data: (Log & { args: IUniswapV2PairMintEventParams })) => void;
  Swap: (data: (Log & { args: IUniswapV2PairSwapEventParams })) => void;
  Sync: (data: (Log & { args: IUniswapV2PairSyncEventParams })) => void;
  Transfer: (data: (Log & { args: IUniswapV2PairTransferEventParams })) => void;
};

export interface IUniswapV2PairGetReservesReturns {
  reserve0: bigint,
  reserve1: bigint,
  blockTimestampLast: number
};

export interface IUniswapV2PairApprovalEventParams {
  owner: string;
  spender: string;
  value: number
}

export interface IUniswapV2PairBurnEventParams {
  sender: string;
  amount0: number;
  amount1: number;
  to: string
}

export interface IUniswapV2PairMintEventParams {
  sender: string;
  amount0: number;
  amount1: number
}

export interface IUniswapV2PairSwapEventParams {
  sender: string;
  amount0In: number;
  amount1In: number;
  amount0Out: number;
  amount1Out: number;
  to: string
}

export interface IUniswapV2PairSyncEventParams {
  reserve0: number;
  reserve1: number
}

export interface IUniswapV2PairTransferEventParams {
  from: string;
  to: string;
  value: number
}

export interface IUniswapV2PairApproveParams {
  spender: string;
  value: number
}

export interface IUniswapV2PairBurnParams {
  to: string
}

export interface IUniswapV2PairMintParams {
  to: string
}

export interface IUniswapV2PairPermitParams {
  owner: string;
  spender: string;
  value: number;
  deadline: number;
  v: number;
  r: string;
  s: string
}

export interface IUniswapV2PairSkimParams {
  to: string
}

export interface IUniswapV2PairSwapParams {
  amount0Out: number;
  amount1Out: number;
  to: string;
  data: string
}

export interface IUniswapV2PairSyncParams {

}

export interface IUniswapV2PairTransferParams {
  to: string;
  value: number
}

export interface IUniswapV2PairTransferFromParams {
  from: string;
  to: string;
  value: number
}

export interface IUniswapV2Pair {
  on<T extends keyof IUniswapV2PairEvents>(eventName: T, callback: IUniswapV2PairEvents[T]): WatchContractEventReturnType;
  MINIMUM_LIQUIDITY(): Promise<number>;
  factory(): Promise<string>;
  getReserves(): Promise<IUniswapV2PairGetReservesReturns>;
  kLast(): Promise<number>;
  price0CumulativeLast(): Promise<number>;
  price1CumulativeLast(): Promise<number>;
  skim(args: IUniswapV2PairSkimParams): ContractOperation;
  sync(args: IUniswapV2PairSyncParams): ContractOperation;
  token0(): Promise<ERC20>;
  token1(): Promise<ERC20>;
}