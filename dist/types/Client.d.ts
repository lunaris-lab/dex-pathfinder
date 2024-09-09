import { Address, PublicClient, WalletClient } from "viem";
import { LevelDBConstructor } from "./Storage";
import { Path } from "../structures/Path";
export type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "utf-16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex";
export interface IStorageParams {
    createWriteStream: (path: string, options?: BufferEncoding | object) => void;
    createReadStream: (path: string, options?: BufferEncoding | object) => void;
    folderPath: string;
}
export interface IViemConfig {
    public: PublicClient;
    wallet: WalletClient;
}
export interface IRouterConfig {
    type: "UniswapV2Router";
    address: Address;
}
export interface IClientParams {
    storage: LevelDBConstructor;
    storagefolder?: string;
    viem: IViemConfig;
    routers: IRouterConfig[];
    requestsPerSeconds?: number;
}
export interface ISwapParams {
    inputToken: Address;
    outputToken: Address;
    inputAmount: bigint;
    depth?: number;
    minPoolSize?: number;
}
export interface ISwapResult {
    inputToken: Address;
    outputToken: Address;
    paths: Path[];
    calculedAt: number;
    calculationTime: number;
}
