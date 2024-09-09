"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
class Path {
    constructor(client, links, tokenIn) {
        this.client = client;
        this.links = links;
        this.tokenIn = tokenIn;
        this.output = 0n;
    }
    ;
    async getOutputAmount(inputAmount) {
        let output = inputAmount; // weird for first step, but then output is always the next input
        for (const link of this.links) {
            const router = this.client.params.routers.find(r => r.address === link.router);
            const pairsStorage = await this.client.storage.getUniswapV2PairList(router.address);
            const pair = await pairsStorage.get(link.pair);
            if (router.type === "UniswapV2Router") {
                const reserves = [
                    BigInt(pair.reserveA),
                    BigInt(pair.reserveB)
                ];
                const out = this.client.utils.getV2AmountOut(pair, reserves, this.tokenIn, output);
                output = out;
                this.tokenIn = link.token;
            }
        }
        ;
        this.output = output;
        return output;
    }
    ;
}
exports.Path = Path;
;
