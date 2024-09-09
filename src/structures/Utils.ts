import { Client } from "./Client";

export class Utils {
    constructor(protected client: Client) { };

    async sleep(ms = 1000): Promise<void> {
        await new Promise(x => setTimeout(x, ms));
    }

    getV2AmountOut(pool: any, reserves: any, tokenIn: string, amountIn: bigint) {
        const { reserveIn, reserveOut } = pool.tokenA === tokenIn ? {
            reserveIn: reserves[0],
            reserveOut: reserves[1]
        } : {
            reserveIn: reserves[1],
            reserveOut: reserves[0]
        };

        const inputWithFee = amountIn * 997n
        const numerator = inputWithFee * reserveOut;
        const denominator = reserveIn * 1000n + inputWithFee;

        if (denominator === 0n) return 0n;

        return numerator / denominator;
    };
}