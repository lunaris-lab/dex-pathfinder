# dex-pathfinder

`dex-pathfinder` is a JavaScript library designed for interacting with decentralized exchanges (DEX) such as Uniswap. It's goal is to find best return for a given pair of tokens without relying in any trusted entity. It run fully local and facilitates fetching and indexing token pairs directly from the Ethereum blockchain (or any evm chain) and supports flexible storage options thanks to [level](https://github.com/level/level) interface.

> Currently only compatible with uniswapV2 interfaces

## Installation

To install `dex-pathfinder`, use npm or yarn:

```bash
npm install dex-pathfinder
```

## How it works?

First of all, the library need to sync to the blockchain, this step could be really heavy in requests calls if you use a RPC provider.

So in the future commits, we'll provide some templates files if you want to speed up this step. But if you want to make it yourself, consider using the param 'requestsPerSeconds' correctly as it can burn your usage limit.

Once all pairs are fetched, they'll be indexed and you'll be able to use the pathfinder.

```ts
import { Client } from 'dex-pathfinder';
import { Level } from "level";

const viem = {
    public: createPublicClient(config),
    wallet: createWalletClient(config)
};

const client = new Client({
    viem,
    // this need to be set correctly
    requestsPerSeconds: 50,
    // the more router you have, the more pairs you'll fetch.
    routers: [
        {
            address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            type: "UniswapV2Router"
        }
    ],
    storage: Level, // you can use any level implementation
    storagefolder: "./src/data" // optional, to store the databases in a specific folder.
});

// this is necessary before any call
await client.init();

// this will launch the sync process
client.sync();
```

You can monitor the sync process using listeners, here is an example using ora.

```ts
const spinner = ora({
    color: "cyan",
    text: `Fetching pairs...`
}).start();

client.pairsFetcher.uniswapV2.on('fetchedPair', (data) => {
    spinner.text = `[${data.router.type}] - Fetching ${data.pair.address} ${data.progress}/${data.total}`
});
client.pairsFetcher.uniswapV2.on('indexedPair', (data) => {
    spinner.text = `[${data.router.type}] - Indexing... ${data.pair.address} ${data.progress}/${data.total}`
});
```

The module will also listen all new blocks and update all pairs reserves to keep it up to date. If you close the client, it will restart at where it was closed and read all missing blocks to be up to date again.

## Usage

Once all the fetching process is done, you can use the swap function to find the best path to swap between two tokens.

Note that depending on your params, it can be really heavy in calculations. The depth and minPoolSize params are here
to let you control the precision.

The more deph, and the less minPoolSize, the more precise it will be. But it will also take longer to find a path.
Lowering theses params will rely on more probabilistic results, but with less calculations.

I recommend using less than 6 as depth, but it depend on your hardware.

```ts
   (async () => {
       const tokenA = "0x39AA39c021dfbaE8faC545936693aC917d5E7563";
       const tokenB = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";

       // this is just a simulation, you'll need to send a tx to do the swap
       const swap = await client.swap({
           inputToken: tokenA,
           outputToken: tokenB,
           inputAmount: 100000n,
           // the maximum length of path, not recommed to set it too high
           // as complexity of calculations will increase exponentially
           depth: 3
           // this is not yet implemented, it will be the minimum
           // liquidity required to use a pool in a swap, quoted in eth.
           minPoolSize: 100n,
       });

       // this will return a swap object with a list of paths,
       // path[0] is the most profitable one, path[1] is the second most profitable one, etc...
       console.log(swap);
   })();
```

The project is currently under heavy development, and not yet ready for production usage.

Today it has some limitations, for example it dont filter frozen pools, so some paths could be just unusable, it will be
partially fixed with the minPoolSize option, but a blacklist/whitelist system will be implemented too to allow you to select
pools you want to use or not.