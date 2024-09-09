export interface IUniswapV2Router02AddLiquidityParams {
  tokenA: string;
  tokenB: string;
  amountADesired: number;
  amountBDesired: number;
  amountAMin: number;
  amountBMin: number;
  to: string;
  deadline: number
}

export interface IUniswapV2Router02AddLiquidityETHParams {
  token: string;
  amountTokenDesired: number;
  amountTokenMin: number;
  amountETHMin: number;
  to: string;
  deadline: number
}

export interface IUniswapV2Router02RemoveLiquidityParams {
  tokenA: string;
  tokenB: string;
  liquidity: number;
  amountAMin: number;
  amountBMin: number;
  to: string;
  deadline: number
}

export interface IUniswapV2Router02RemoveLiquidityETHParams {
  token: string;
  liquidity: number;
  amountTokenMin: number;
  amountETHMin: number;
  to: string;
  deadline: number
}

export interface IUniswapV2Router02RemoveLiquidityETHSupportingFeeOnTransferTokensParams {
  token: string;
  liquidity: number;
  amountTokenMin: number;
  amountETHMin: number;
  to: string;
  deadline: number
}

export interface IUniswapV2Router02RemoveLiquidityETHWithPermitParams {
  token: string;
  liquidity: number;
  amountTokenMin: number;
  amountETHMin: number;
  to: string;
  deadline: number;
  approveMax: boolean;
  v: number;
  r: string;
  s: string
}

export interface IUniswapV2Router02RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
  token: string;
  liquidity: number;
  amountTokenMin: number;
  amountETHMin: number;
  to: string;
  deadline: number;
  approveMax: boolean;
  v: number;
  r: string;
  s: string
}

export interface IUniswapV2Router02RemoveLiquidityWithPermitParams {
  tokenA: string;
  tokenB: string;
  liquidity: number;
  amountAMin: number;
  amountBMin: number;
  to: string;
  deadline: number;
  approveMax: boolean;
  v: number;
  r: string;
  s: string
}

export interface IUniswapV2Router02SwapETHForExactTokensParams {
  amountOut: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactETHForTokensParams {
  amountOutMin: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactETHForTokensSupportingFeeOnTransferTokensParams {
  amountOutMin: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactTokensForETHParams {
  amountIn: number;
  amountOutMin: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactTokensForETHSupportingFeeOnTransferTokensParams {
  amountIn: bigint;
  amountOutMin: bigint;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactTokensForTokensParams {
  amountIn: bigint;
  amountOutMin: bigint;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
  amountIn: number;
  amountOutMin: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapTokensForExactETHParams {
  amountOut: number;
  amountInMax: number;
  path: string[];
  to: string;
  deadline: number
}

export interface IUniswapV2Router02SwapTokensForExactTokensParams {
  amountOut: number;
  amountInMax: number;
  path: string[];
  to: string;
  deadline: number
}

