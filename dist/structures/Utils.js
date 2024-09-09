"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    constructor(client) {
        this.client = client;
    }
    ;
    async sleep(ms = 1000) {
        await new Promise(x => setTimeout(x, ms));
    }
    getV2AmountOut(pool, reserves, tokenIn, amountIn) {
        const { reserveIn, reserveOut } = pool.tokenA === tokenIn ? {
            reserveIn: reserves[0],
            reserveOut: reserves[1]
        } : {
            reserveIn: reserves[1],
            reserveOut: reserves[0]
        };
        const inputWithFee = amountIn * 997n;
        const numerator = inputWithFee * reserveOut;
        const denominator = reserveIn * 1000n + inputWithFee;
        if (denominator === 0n)
            return 0n;
        return numerator / denominator;
    }
    ;
}
exports.Utils = Utils;
