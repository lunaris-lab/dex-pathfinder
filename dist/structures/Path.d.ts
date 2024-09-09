import { IGraphLinkItem } from "../types/Storage";
import { Client } from "./Client";
export declare class Path {
    protected client: Client;
    links: IGraphLinkItem[];
    protected tokenIn: string;
    output: bigint;
    constructor(client: Client, links: IGraphLinkItem[], tokenIn: string);
    getOutputAmount(inputAmount: bigint): Promise<bigint>;
}
