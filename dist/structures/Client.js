"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const fetchers_1 = require("./fetchers");
const syncers_1 = require("./syncers");
const Utils_1 = require("./Utils");
const Storage_1 = require("./Storage");
const Path_1 = require("./Path");
class Client {
    constructor(params) {
        this.params = params;
        // Necessary variables for DFS and swap functions
        this.dfsCache = new Map();
        this.storage = new Storage_1.Storage(this);
        this.utils = new Utils_1.Utils(this);
        this.pairsFetcher = new fetchers_1.PairsFetcher(this);
        this.pairsSyncer = new syncers_1.PairsSyncer(this);
    }
    ;
    async init() {
        await this.storage.init();
    }
    async dfs(current, target, remainingSteps) {
        // If we reach the target and there are no more steps left
        if (current === target) {
            return [[]]; // return an empty list because the last path should not include a link
        }
        // If we reach the target and there are no more steps left, return an empty list
        // because the last path should not include a link
        if (remainingSteps === 0) {
            return [];
        }
        const key = `${current}-${remainingSteps}`;
        if (this.dfsCache.has(key)) {
            return this.dfsCache.get(key);
        }
        const paths = [];
        const graphStorage = await this.storage.getGraph();
        const neighbors = await graphStorage.get(current) || [];
        for (const link of neighbors) {
            // Call DFS recursively with the token in the link
            const subPaths = await this.dfs(link.token, target, remainingSteps - 1);
            for (const path of subPaths) {
                paths.push([link, ...path]);
            }
        }
        this.dfsCache.set(key, paths);
        return paths;
    }
    async swap(params) {
        const timeStart = Date.now();
        const depth = params.depth || 3;
        const linksLists = await this.dfs(params.inputToken, params.outputToken, depth - 1);
        // clear cache
        this.dfsCache = new Map();
        const paths = linksLists.map((links) => new Path_1.Path(this, links, params.inputToken));
        const outputs = await Promise.all(paths.map(async (path) => ({
            output: await path.getOutputAmount(params.inputAmount),
            path
        })));
        const sortedPaths = outputs.sort((a, b) => (a.output < b.output ? 1 : (a.output > b.output ? -1 : 0))).map(p => p.path);
        return {
            inputToken: params.inputToken,
            outputToken: params.outputToken,
            paths: sortedPaths,
            calculedAt: Date.now(),
            calculationTime: Date.now() - timeStart,
        };
    }
    ;
    async _onBlock(block, retry = 5) {
        this.pairsFetcher.pause();
        const configStorage = await this.storage.getConfig();
        const lastUpdatedBlock = await configStorage.get('lastUpdatedBlock') || block.number.toString();
        const missingBlocks = this.currentBlock - BigInt(lastUpdatedBlock);
        const blocksToRetreive = BigInt(Math.min(parseInt(missingBlocks.toString()), 100));
        const isUpToDate = BigInt(lastUpdatedBlock) === block.number - 1n;
        if (!isUpToDate) {
            await this.pairsSyncer.sync({
                ...block,
                number: BigInt(lastUpdatedBlock),
            }, blocksToRetreive);
            const updatedAtBlock = BigInt(lastUpdatedBlock) + blocksToRetreive;
            if (retry > 0) {
                const lastBlock = await this.params.viem.public.getBlock({ blockNumber: updatedAtBlock });
                await configStorage.put('lastUpdatedBlock', updatedAtBlock.toString());
                await this._onBlock(lastBlock, retry - 1);
            }
        }
        else {
            await this.pairsSyncer.sync(block);
            await configStorage.put('lastUpdatedBlock', block.number.toString());
        }
        ;
        this.pairsFetcher.unPause();
    }
    async sync() {
        this.currentBlock = await this.params.viem.public.getBlockNumber();
        this.params.viem.public.watchBlocks({
            onBlock: (block) => {
                this.currentBlock = block.number;
                this._onBlock(block);
            }
        });
        await this.pairsFetcher?.fetchPairs();
    }
    ;
}
exports.Client = Client;
