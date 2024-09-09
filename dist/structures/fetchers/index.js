"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairsFetcher = void 0;
const UniswapV2Fetcher_1 = require("./UniswapV2Fetcher");
class PairsFetcher {
    constructor(client) {
        this.uniswapV2 = new UniswapV2Fetcher_1.UniswapV2Fetcher(client);
    }
    ;
    async fetchPairs() {
        await this.uniswapV2.init();
        await this.uniswapV2.fetchPairs();
    }
    ;
    pause() {
        this.uniswapV2.pause();
    }
    ;
    unPause() {
        this.uniswapV2.unPause();
    }
    ;
}
exports.PairsFetcher = PairsFetcher;
