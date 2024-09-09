"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
function withSafeGet(db) {
    const originalGet = db.get.bind(db); // Sauvegarde de la méthode originale `.get`
    db.get = async function (key) {
        return await new Promise((resolve, reject) => originalGet(key, (err, value) => {
            if (!err || err?.status === 404)
                resolve(value);
            reject(err);
        }));
    };
    return db;
}
class Storage {
    constructor(client) {
        this.client = client;
        this.instances = new Map();
        this.path = client.params.storagefolder || "";
        this.path.endsWith("/") ? null : (this.path += "/");
    }
    ;
    async init() {
        for (const router of this.client.params.routers) {
            const db = new this.client.params.storage(this.path + router.address, { valueEncoding: "json" });
            await db.open();
            this.instances.set(router.address, withSafeGet(db));
        }
    }
    async get(name) {
        let db = this.instances.get(name);
        if (!db) {
            db = new this.client.params.storage(this.path + name, { valueEncoding: "json" });
            await db.open();
            this.instances.set(name, withSafeGet(db));
        }
        return db;
    }
    ;
    async getUniswapV2PairList(routerAddress) {
        return await this.get(routerAddress);
    }
    ;
    async getGraph() {
        return await this.get("graph");
    }
    ;
    async getConfig() {
        return await this.get("config");
    }
    ;
}
exports.Storage = Storage;
