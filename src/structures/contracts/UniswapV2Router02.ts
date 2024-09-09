import * as abi from "../../abis/UniswapV2Router02";
import {
    IUniswapV2Router02AddLiquidityParams, IUniswapV2Router02AddLiquidityETHParams, IUniswapV2Router02RemoveLiquidityParams,
    IUniswapV2Router02RemoveLiquidityETHParams, IUniswapV2Router02RemoveLiquidityETHSupportingFeeOnTransferTokensParams,
    IUniswapV2Router02RemoveLiquidityETHWithPermitParams, IUniswapV2Router02RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams,
    IUniswapV2Router02RemoveLiquidityWithPermitParams, IUniswapV2Router02SwapETHForExactTokensParams, IUniswapV2Router02SwapExactETHForTokensParams,
    IUniswapV2Router02SwapExactETHForTokensSupportingFeeOnTransferTokensParams, IUniswapV2Router02SwapExactTokensForETHParams,
    IUniswapV2Router02SwapExactTokensForETHSupportingFeeOnTransferTokensParams, IUniswapV2Router02SwapExactTokensForTokensParams,
    IUniswapV2Router02SwapExactTokensForTokensSupportingFeeOnTransferTokensParams, IUniswapV2Router02SwapTokensForExactETHParams,
    IUniswapV2Router02SwapTokensForExactTokensParams
} from "../../types/contracts/UniswapV2Router02";
import { ContractOperation } from "./ContractOperation";
import { IContractConfig } from "../../types/contracts";
import { Address } from "viem";
import { UniswapV2Factory } from "./UniswapV2Factory";

export class UniswapV2Router02 {
    address: Address;

    constructor(protected config: IContractConfig) {
        this.address = config.address
    }

    async WETH(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.WETH],
            address: this.address,
            functionName: "WETH",
            args: []
        }) as any
    }

    public addLiquidity(args: IUniswapV2Router02AddLiquidityParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.addLiquidity],
            args,
            address: this.config.address,
            functionName: "addLiquidity",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public addLiquidityETH(args: IUniswapV2Router02AddLiquidityETHParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.addLiquidityETH],
            args,
            address: this.config.address,
            functionName: "addLiquidityETH",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    async factory(): Promise<UniswapV2Factory> {
        const address = await this.config.client.public.readContract({
            abi: [abi.factory],
            address: this.address,
            functionName: "factory",
            args: []
        }) as Address;

        return new UniswapV2Factory({
            address,
            client: this.config.client
        });
    }

    async getAmountIn(amountOut: number, reserveIn: number, reserveOut: number): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountIn],
            address: this.address,
            functionName: "getAmountIn",
            args: [amountOut, reserveIn, reserveOut]
        }) as any
    }

    async getAmountOut(amountIn: number, reserveIn: number, reserveOut: number): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountOut],
            address: this.address,
            functionName: "getAmountOut",
            args: [amountIn, reserveIn, reserveOut]
        }) as any
    }

    async getAmountsIn(amountOut: number, path: string[]): Promise<number[]> {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountsIn],
            address: this.address,
            functionName: "getAmountsIn",
            args: [amountOut, path]
        }) as any
    }

    async getAmountsOut(amountIn: number, path: string[]): Promise<number[]> {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountsOut],
            address: this.address,
            functionName: "getAmountsOut",
            args: [amountIn, path]
        }) as any
    }

    async quote(amountA: number, reserveA: number, reserveB: number): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.quote],
            address: this.address,
            functionName: "quote",
            args: [amountA, reserveA, reserveB]
        }) as any
    }

    public removeLiquidity(args: IUniswapV2Router02RemoveLiquidityParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidity],
            args,
            address: this.config.address,
            functionName: "removeLiquidity",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public removeLiquidityETH(args: IUniswapV2Router02RemoveLiquidityETHParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETH],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETH",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public removeLiquidityETHSupportingFeeOnTransferTokens(args: IUniswapV2Router02RemoveLiquidityETHSupportingFeeOnTransferTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public removeLiquidityETHWithPermit(args: IUniswapV2Router02RemoveLiquidityETHWithPermitParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHWithPermit],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHWithPermit",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(args: IUniswapV2Router02RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public removeLiquidityWithPermit(args: IUniswapV2Router02RemoveLiquidityWithPermitParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityWithPermit],
            args,
            address: this.config.address,
            functionName: "removeLiquidityWithPermit",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapETHForExactTokens(args: IUniswapV2Router02SwapETHForExactTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapETHForExactTokens],
            args,
            address: this.config.address,
            functionName: "swapETHForExactTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactETHForTokens(args: IUniswapV2Router02SwapExactETHForTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactETHForTokens],
            args,
            address: this.config.address,
            functionName: "swapExactETHForTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactETHForTokensSupportingFeeOnTransferTokens(args: IUniswapV2Router02SwapExactETHForTokensSupportingFeeOnTransferTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactETHForTokensSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactTokensForETH(args: IUniswapV2Router02SwapExactTokensForETHParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForETH],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForETH",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactTokensForETHSupportingFeeOnTransferTokens(args: IUniswapV2Router02SwapExactTokensForETHSupportingFeeOnTransferTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForETHSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactTokensForTokens(args: IUniswapV2Router02SwapExactTokensForTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapExactTokensForTokensSupportingFeeOnTransferTokens(args: IUniswapV2Router02SwapExactTokensForTokensSupportingFeeOnTransferTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForTokensSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapTokensForExactETH(args: IUniswapV2Router02SwapTokensForExactETHParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapTokensForExactETH],
            args,
            address: this.config.address,
            functionName: "swapTokensForExactETH",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public swapTokensForExactTokens(args: IUniswapV2Router02SwapTokensForExactTokensParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.swapTokensForExactTokens],
            args,
            address: this.config.address,
            functionName: "swapTokensForExactTokens",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

}
