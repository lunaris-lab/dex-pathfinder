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
exports.UniswapV2Factory = void 0;
const abi = __importStar(require("../../abis/UniswapV2Factory"));
const ContractOperation_1 = require("./ContractOperation");
const UniswapV2Pair_1 = require("./UniswapV2Pair");
class UniswapV2Factory {
    constructor(config) {
        this.config = config;
        this.address = config.address;
    }
    on(eventName, callback) {
        return this.config.client.public.watchContractEvent({
            address: this.config.address,
            abi: [abi[eventName]],
            onLogs: logs => logs.map((l) => {
                // PairCreated return a empty parameters, so we parse it into "index"
                // for a better lisibility
                if (eventName === "PairCreated")
                    Object.keys(l.args).forEach((key) => {
                        if (key === "") {
                            l.args["index"] = l[""];
                            delete l[""];
                        }
                    });
                callback(l);
            })
        });
    }
    ;
    async allPairs(index) {
        const pairAddress = await this.config.client.public.readContract({
            abi: [abi.allPairs],
            address: this.address,
            functionName: "allPairs",
            args: [index]
        });
        return new UniswapV2Pair_1.UniswapV2Pair({
            ...this.config,
            address: pairAddress,
        });
    }
    async allPairsLength() {
        return await this.config.client.public.readContract({
            abi: [abi.allPairsLength],
            address: this.address,
            functionName: "allPairsLength",
            args: []
        });
    }
    createPair(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.createPair],
            args,
            address: this.config.address,
            functionName: "createPair",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    async feeTo() {
        return await this.config.client.public.readContract({
            abi: [abi.feeTo],
            address: this.address,
            functionName: "feeTo",
            args: []
        });
    }
    async feeToSetter() {
        return await this.config.client.public.readContract({
            abi: [abi.feeToSetter],
            address: this.address,
            functionName: "feeToSetter",
            args: []
        });
    }
    async getPair(tokenA, tokenB) {
        const pairAddress = await this.config.client.public.readContract({
            abi: [abi.getPair],
            address: this.address,
            functionName: "getPair",
            args: [tokenA, tokenB]
        });
        return new UniswapV2Pair_1.UniswapV2Pair({
            ...this.config,
            address: pairAddress,
        });
    }
    setFeeTo(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.setFeeTo],
            args: {
                "": args.to
            },
            address: this.config.address,
            functionName: "setFeeTo",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
    setFeeToSetter(args) {
        return new ContractOperation_1.ContractOperation(this.config.client, {
            abi: [abi.setFeeToSetter],
            args: {
                "": args.to
            },
            address: this.config.address,
            functionName: "setFeeToSetter",
            account: this.config.client.wallet.account,
            chain: this.config.client.wallet.chain
        });
    }
}
exports.UniswapV2Factory = UniswapV2Factory;
