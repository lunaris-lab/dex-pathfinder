import { Client } from "./Client";
import { IAbstractLevel, IGraphLinkItem, IUniswapV2PairListItem } from "../types/Storage";
import { Address } from "viem";
export declare class Storage {
    protected client: Client;
    protected instances: Map<string, IAbstractLevel<any, any>>;
    protected path: string;
    constructor(client: Client);
    init(): Promise<void>;
    get<key, item>(name: string): Promise<IAbstractLevel<key, item>>;
    getUniswapV2PairList(routerAddress: Address): Promise<IAbstractLevel<Address, IUniswapV2PairListItem>>;
    getGraph(): Promise<IAbstractLevel<Address, IGraphLinkItem[]>>;
    getConfig(): Promise<IAbstractLevel<string, any>>;
}
