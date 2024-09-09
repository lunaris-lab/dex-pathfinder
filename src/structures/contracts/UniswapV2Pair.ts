import * as abi from "../../abis/UniswapV2Pair";
import { IUniswapV2PairEvents, IUniswapV2PairSyncParams, IUniswapV2PairGetReservesReturns, IUniswapV2Pair, IUniswapV2PairSkimParams } from "../../types/contracts/UniswapV2Pair";
import { ContractOperation } from "./ContractOperation";
import { IContractConfig } from "../../types/contracts";
import { Address } from "viem";
import { ERC20, ERC20Builder, IERC20Permit } from "@lunarislab/web3tokens";

export class UniswapV2Pair {
    public address: Address;
    poolToken: ERC20 & IERC20Permit;
    public tokenA?: ERC20;
    public tokenB?: ERC20;

    constructor(protected config: IContractConfig) {
        this.address = config.address;
        this.poolToken = new ERC20Builder(config.client).setPermit().get(config.address);
    }

    on<T extends keyof IUniswapV2PairEvents>(eventName: T, callback: IUniswapV2PairEvents[T]) {
        return this.config.client.public.watchContractEvent({
            address: this.config.address,
            abi: [abi[eventName]],
            onLogs: logs => logs.map(l => callback(l as any))
        })
    };

    protected async _token0(): Promise<Address> {
        return await this.config.client.public.readContract({
            abi: [abi.token0],
            address: this.address,
            functionName: "token0",
            args: []
        }) as any
    }

    protected async _token1(): Promise<Address> {
        return await this.config.client.public.readContract({
            abi: [abi.token1],
            address: this.address,
            functionName: "token1",
            args: []
        }) as any;
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
        }) as any[];

        this.tokenA = new ERC20({ ...this.config, address: tokenA });
        this.tokenB = new ERC20({ ...this.config, address: tokenB });
    }

    async DOMAIN_SEPARATOR(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.DOMAIN_SEPARATOR],
            address: this.address,
            functionName: "DOMAIN_SEPARATOR",
            args: []
        }) as any
    }

    async MINIMUM_LIQUIDITY(): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.MINIMUM_LIQUIDITY],
            address: this.address,
            functionName: "MINIMUM_LIQUIDITY",
            args: []
        }) as any
    }

    async PERMIT_TYPEHASH(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.PERMIT_TYPEHASH],
            address: this.address,
            functionName: "PERMIT_TYPEHASH",
            args: []
        }) as any
    }

    async factory(): Promise<string> {
        return await this.config.client.public.readContract({
            abi: [abi.factory],
            address: this.address,
            functionName: "factory",
            args: []
        }) as any
    }

    async getReserves(): Promise<IUniswapV2PairGetReservesReturns> {
        const reserves = await this.config.client.public.readContract({
            abi: [abi.getReserves],
            address: this.address,
            functionName: "getReserves",
            args: []
        }) as any;

        return {
            reserve0: reserves[0] as bigint,
            reserve1: reserves[1] as bigint,
            blockTimestampLast: reserves[2] as number
        } as IUniswapV2PairGetReservesReturns
    }

    async kLast(): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.kLast],
            address: this.address,
            functionName: "kLast",
            args: []
        }) as any
    }

    async price0CumulativeLast(): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.price0CumulativeLast],
            address: this.address,
            functionName: "price0CumulativeLast",
            args: []
        }) as any
    }

    async price1CumulativeLast(): Promise<number> {
        return await this.config.client.public.readContract({
            abi: [abi.price1CumulativeLast],
            address: this.address,
            functionName: "price1CumulativeLast",
            args: []
        }) as any
    }

    public skim(args: IUniswapV2PairSkimParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.skim],
            args,
            address: this.config.address,
            functionName: "skim",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    public sync(args: IUniswapV2PairSyncParams): ContractOperation {
        return new ContractOperation(this.config.client, {
            abi: [abi.sync],
            args,
            address: this.config.address,
            functionName: "sync",
            account: this.config.client.wallet.account!,
            chain: this.config.client.wallet.chain!
        });
    }

    async buyTokenA(amountToBuy: number) { };
    async buyTokenB(amountToBuy: number) { };

    async sellTokenA(amountToSell: number) { };
    async sellTokenB(amountToSell: number) { };
}
