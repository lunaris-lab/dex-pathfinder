import { Client } from "./Client";
export declare class Utils {
    protected client: Client;
    constructor(client: Client);
    sleep(ms?: number): Promise<void>;
    getV2AmountOut(pool: any, reserves: any, tokenIn: string, amountIn: bigint): bigint;
}
