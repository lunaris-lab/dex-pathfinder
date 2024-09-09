import * as abi from "../../abis/UniswapV2Factory";
import { IUniswapV2FactoryEvents, IUniswapV2FactoryCreatePairParams, IUniswapV2FactorySetFeeToParams, IUniswapV2FactorySetFeeToSetterParams } from "../../types/contracts/UniswapV2Factory";
import { ContractOperation } from "./ContractOperation";
import { IContractConfig } from "../../types/contracts";
import { Address } from "viem";
import { UniswapV2Pair } from "./UniswapV2Pair";

export class UniswapV2Factory {
    address: Address;

    constructor(protected config: IContractConfig) {
        this.address = config.address
    }

    on<T extends keyof IUniswapV2FactoryEvents>(eventName: T, callback: IUniswapV2FactoryEvents[T]) {
        return this.config.client.public.watchContractEvent({
            address: this.config.address,
            abi: [abi[eventName]],
            onLogs: logs => logs.map((l: any) => {
                // PairCreated return a empty parameters, so we parse it into "index"
                // for a better lisibility
                if (eventName === "PairCreated") Object.keys(l.args).forEach((key) => {
                    if (key === "") {
                        l.args["index"] = l[""];
                        delete l[""];
                    }
                });

                callback(l as any)
            })
        })
    };

    async allPairs(index: number): Promise<UniswapV2Pair> {
        const pairAddress = await this.config.client.public.readContract({
            abi: [abi.allPairs],
            address: this.address,
            functionName: "allPairs",
            args: [index]
        }) as any;

        return new UniswapV2Pair({
            ...this.config,
            address: pairAddress,
        })
    }

    async allPairsLength(): Promise<bigint> {
        return await this.config.client.public.readContract({
            abi: [abi.allPairsLength],
            address: this.address,
            functionName: "allPairsLength",
            args: []
        }) as any
    }

    public createPair(args: IUniswapV2FactoryCreatePairParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.createPair],
            args,
            address: this.config.address,
            functionName: "createPair",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    async feeTo(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.feeTo],
            address: this.address,
            functionName: "feeTo",
            args: []
        }) as any
    }

    async feeToSetter(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.feeToSetter],
            address: this.address,
            functionName: "feeToSetter",
            args: []
        }) as any
    }

    async getPair(tokenA: string, tokenB: string): Promise<UniswapV2Pair> {
        const pairAddress = await this.config.client.public.readContract({
            abi: [abi.getPair],
            address: this.address,
            functionName: "getPair",
            args: [tokenA, tokenB]
        }) as any;

        return new UniswapV2Pair({
            ...this.config,
            address: pairAddress,
        })
    }

    public setFeeTo(args: IUniswapV2FactorySetFeeToParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.setFeeTo],
            args: {
                "": args.to
            },
            address: this.config.address,
            functionName: "setFeeTo",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public setFeeToSetter(args: IUniswapV2FactorySetFeeToSetterParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.setFeeToSetter],
            args: {
                "": args.to
            },
            address: this.config.address,
            functionName: "setFeeToSetter",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }
}
