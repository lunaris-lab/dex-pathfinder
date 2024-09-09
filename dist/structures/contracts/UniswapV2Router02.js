"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Router02 = void 0;
const abi = __importStar(require("../../abis/UniswapV2Router02"));
const ContractOperation_1 = require("./ContractOperation");
const UniswapV2Factory_1 = require("./UniswapV2Factory");
class UniswapV2Router02 {
    constructor(config) {
        this.config = config;
        this.address = config.address;
    }
    async WETH() {
        return await this.config.client.public.readContract({
            abi: [abi.WETH],
            address: this.address,
            functionName: "WETH",
            args: []
        });
    }
    addLiquidity(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.addLiquidity],
            args,
            address: this.config.address,
            functionName: "addLiquidity",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    addLiquidityETH(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.addLiquidityETH],
            args,
            address: this.config.address,
            functionName: "addLiquidityETH",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    async factory() {
        const address = await this.config.client.public.readContract({
            abi: [abi.factory],
            address: this.address,
            functionName: "factory",
            args: []
        });
        return new UniswapV2Factory_1.UniswapV2Factory({
            address,
            client: this.config.client
        });
    }
    async getAmountIn(amountOut, reserveIn, reserveOut) {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountIn],
            address: this.address,
            functionName: "getAmountIn",
            args: [amountOut, reserveIn, reserveOut]
        });
    }
    async getAmountOut(amountIn, reserveIn, reserveOut) {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountOut],
            address: this.address,
            functionName: "getAmountOut",
            args: [amountIn, reserveIn, reserveOut]
        });
    }
    async getAmountsIn(amountOut, path) {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountsIn],
            address: this.address,
            functionName: "getAmountsIn",
            args: [amountOut, path]
        });
    }
    async getAmountsOut(amountIn, path) {
        return await this.config.client.public.readContract({
            abi: [abi.getAmountsOut],
            address: this.address,
            functionName: "getAmountsOut",
            args: [amountIn, path]
        });
    }
    async quote(amountA, reserveA, reserveB) {
        return await this.config.client.public.readContract({
            abi: [abi.quote],
            address: this.address,
            functionName: "quote",
            args: [amountA, reserveA, reserveB]
        });
    }
    removeLiquidity(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidity],
            args,
            address: this.config.address,
            functionName: "removeLiquidity",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    removeLiquidityETH(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETH],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETH",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    removeLiquidityETHSupportingFeeOnTransferTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    removeLiquidityETHWithPermit(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHWithPermit],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHWithPermit",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    removeLiquidityWithPermit(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.removeLiquidityWithPermit],
            args,
            address: this.config.address,
            functionName: "removeLiquidityWithPermit",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapETHForExactTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapETHForExactTokens],
            args,
            address: this.config.address,
            functionName: "swapETHForExactTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactETHForTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactETHForTokens],
            args,
            address: this.config.address,
            functionName: "swapExactETHForTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactETHForTokensSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactTokensForETH(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForETH],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForETH",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactTokensForETHSupportingFeeOnTransferTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForETHSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactTokensForTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapExactTokensForTokensSupportingFeeOnTransferTokens],
            args,
            address: this.config.address,
            functionName: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapTokensForExactETH(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapTokensForExactETH],
            args,
            address: this.config.address,
            functionName: "swapTokensForExactETH",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    swapTokensForExactTokens(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.swapTokensForExactTokens],
            args,
            address: this.config.address,
            functionName: "swapTokensForExactTokens",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
}
exports.UniswapV2Router02 = UniswapV2Router02;
