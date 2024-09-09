import { Client } from "./Client";
import { IAbstractLevel, IGraphLinkItem, IUniswapV2PairListItem } from "../types/Storage";
import { Address } from "viem";

function withSafeGet(db: IAbstractLevel<any, any>) {
    const originalGet = db.get.bind(db); // Sauvegarde de la méthode originale `.get`

    db.get = async function (key: any) {
        return await new Promise((resolve, reject) => originalGet(key, (err: any, value) => {
            if (!err || err?.status === 404) resolve(value);
            reject(err);
        }));
    };

    return db;
}

export class Storage {
    protected instances: Map<string, IAbstractLevel<any, any>> = new Map();
    protected path: string;

    constructor(protected client: Client) {
        this.path = client.params.storagefolder || "";
        this.path.endsWith("/") ? null : (this.path += "/");
    };

    async init() {
        for (const router of this.client.params.routers) {
            const db = new this.client.params.storage(this.path + router.address, { valueEncoding: "json" });
            await db.open();
            this.instances.set(router.address, withSafeGet(db));
        }
    }

    async get<key, item>(name: string): Promise<IAbstractLevel<key, item>> {
        let db = this.instances.get(name) as IAbstractLevel<key, item>

        if (!db) {
            db = new this.client.params.storage(this.path + name, { valueEncoding: "json" });
            await db.open();
            this.instances.set(name, withSafeGet(db));
        }

        return db;
    };

    async getUniswapV2PairList(routerAddress: Address): Promise<IAbstractLevel<Address, IUniswapV2PairListItem>> {
        return await this.get<Address, IUniswapV2PairListItem>(routerAddress);
    };

    async getGraph(): Promise<IAbstractLevel<Address, IGraphLinkItem[]>> {
        return await this.get<Address, IGraphLinkItem[]>("graph");
    };

    async getConfig(): Promise<IAbstractLevel<string, any>> {
        return await this.get<string, any>("config");
    };
}