"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairsSyncer = void 0;
const UniswapV2Syncer_1 = require("./UniswapV2Syncer");
class PairsSyncer {
    constructor(client) {
        this.uniswapV2 = new UniswapV2Syncer_1.UniswapV2Syncer(client);
    }
    ;
    async sync(block, blocksToRetreive) {
        await this.uniswapV2.sync(block, blocksToRetreive);
    }
    ;
}
exports.PairsSyncer = PairsSyncer;
