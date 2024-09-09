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
exports.UniswapV2Pair = void 0;
const abi = __importStar(require("../../abis/UniswapV2Pair"));
const ContractOperation_1 = require("./ContractOperation");
const web3tokens_1 = require("@lunarislab/web3tokens");
class UniswapV2Pair {
    constructor(config) {
        this.config = config;
        this.address = config.address;
        this.poolToken = new web3tokens_1.ERC20Builder(config.client).setPermit().get(config.address);
    }
    on(eventName, callback) {
        return this.config.client.public.watchContractEvent({
            address: this.config.address,
            abi: [abi[eventName]],
            onLogs: logs => logs.map(l => callback(l))
        });
    }
    ;
    async _token0() {
        return await this.config.client.public.readContract({
            abi: [abi.token0],
            address: this.address,
            functionName: "token0",
            args: []
        });
    }
    async _token1() {
        return await this.config.client.public.readContract({
            abi: [abi.token1],
            address: this.address,
            functionName: "token1",
            args: []
        });
    }
    async fetch() {
        const [tokenA, tokenB] = await this.config.client.public.multicall({
            contracts: [
                {
                    abi: [abi.token0],
                    address: this.address,
                    functionName: "token0",
                    args: []
                },
                {
                    abi: [abi.token1],
                    address: this.address,
                    functionName: "token1",
                    args: []
                }
            ],
            allowFailure: false
        });
        this.tokenA = new web3tokens_1.ERC20({ ...this.config, address: tokenA });
        this.tokenB = new web3tokens_1.ERC20({ ...this.config, address: tokenB });
    }
    async DOMAIN_SEPARATOR() {
        return await this.config.client.public.readContract({
            abi: [abi.DOMAIN_SEPARATOR],
            address: this.address,
            functionName: "DOMAIN_SEPARATOR",
            args: []
        });
    }
    async MINIMUM_LIQUIDITY() {
        return await this.config.client.public.readContract({
            abi: [abi.MINIMUM_LIQUIDITY],
            address: this.address,
            functionName: "MINIMUM_LIQUIDITY",
            args: []
        });
    }
    async PERMIT_TYPEHASH() {
        return await this.config.client.public.readContract({
            abi: [abi.PERMIT_TYPEHASH],
            address: this.address,
            functionName: "PERMIT_TYPEHASH",
            args: []
        });
    }
    async factory() {
        return await this.config.client.public.readContract({
            abi: [abi.factory],
            address: this.address,
            functionName: "factory",
            args: []
        });
    }
    async getReserves() {
        const reserves = await this.config.client.public.readContract({
            abi: [abi.getReserves],
            address: this.address,
            functionName: "getReserves",
            args: []
        });
        return {
            reserve0: reserves[0],
            reserve1: reserves[1],
            blockTimestampLast: reserves[2]
        };
    }
    async kLast() {
        return await this.config.client.public.readContract({
            abi: [abi.kLast],
            address: this.address,
            functionName: "kLast",
            args: []
        });
    }
    async price0CumulativeLast() {
        return await this.config.client.public.readContract({
            abi: [abi.price0CumulativeLast],
            address: this.address,
            functionName: "price0CumulativeLast",
            args: []
        });
    }
    async price1CumulativeLast() {
        return await this.config.client.public.readContract({
            abi: [abi.price1CumulativeLast],
            address: this.address,
            functionName: "price1CumulativeLast",
            args: []
        });
    }
    skim(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.skim],
            args,
            address: this.config.address,
            functionName: "skim",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    sync(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.sync],
            args,
            address: this.config.address,
            functionName: "sync",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    async buyTokenA(amountToBuy) { }
    ;
    async buyTokenB(amountToBuy) { }
    ;
    async sellTokenA(amountToSell) { }
    ;
    async sellTokenB(amountToSell) { }
    ;
}
exports.UniswapV2Pair = UniswapV2Pair;
