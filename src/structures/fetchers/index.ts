import { Client } from "../Client";
import { UniswapV2Fetcher } from "./UniswapV2Fetcher";

export class PairsFetcher {
    public uniswapV2: UniswapV2Fetcher;

    constructor(client: Client) {
        this.uniswapV2 = new UniswapV2Fetcher(client);
    };

    public async fetchPairs() {
        await this.uniswapV2.init();
        await this.uniswapV2.fetchPairs();
    };

    public pause() {
        this.uniswapV2.pause();
    };

    public unPause() {
        this.uniswapV2.unPause();
    };
}