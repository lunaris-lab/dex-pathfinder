import { AbstractBatchOperation, AbstractBatchOptions, AbstractChainedBatch, AbstractClearOptions, AbstractDatabaseOptions, AbstractDelOptions, AbstractGetManyOptions, AbstractGetOptions, AbstractIterator, AbstractIteratorOptions, AbstractKeyIterator, AbstractKeyIteratorOptions, AbstractLevel, AbstractOpenOptions, AbstractPutOptions, AbstractValueIterator, AbstractValueIteratorOptions } from "abstract-level";
import { Address } from "viem";

export interface IStorageAdapterOptions {
    name: string;
    folder?: string;
}
export type StorageAdapterIteratorCallback<T, U> = (item: T, key: U) => void;
export declare class StorageAdapter<key = string, item = any> {
    constructor(options: IStorageAdapterOptions);
    clear(): void;
    getItem(key: key): Promise<item | null>;
    iterate(iteratorCallback: StorageAdapterIteratorCallback<item, key>): Promise<void>;
    key(keyIndex: number): Promise<key | null>;
    keys(): Promise<key[]>;
    length(): Promise<number>;
    removeItem(key: key): Promise<void>;
    setItem(key: key, item: item): Promise<item>;
}

export interface IUniswapV2PairListItem {
    address: Address,
    tokenA: Address,
    tokenB: Address,
    reserveA: string,
    reserveB: string,
    updatedAtBlock: string,
    id: number
};

export interface IGraphLinkItem {
    pair: Address,
    router: Address,
    token: Address // the linked token
};

export declare class IAbstractLevel<KDefault = string, VDefault = string> {
    /**
    * Open the database.
    */
    open(): Promise<void>
    open(options: AbstractOpenOptions): Promise<void>

    /**
     * Get a value from the database by {@link key}.
     */
    get(key: KDefault): Promise<VDefault>
    get(key: KDefault, callback: (err: any, value: VDefault) => void): Promise<VDefault>

    /**
     * Get multiple values from the database by an array of {@link keys}.
     */
    getMany(keys: KDefault[]): Promise<VDefault[]>

    /**
     * Add a new entry or overwrite an existing entry.
     */
    put(key: KDefault, value: VDefault): Promise<void>

    /**
     * Delete an entry by {@link key}.
     */
    del(key: KDefault): Promise<void>

    /**
     * Perform multiple _put_ and/or _del_ operations in bulk.
     */
    batch(): AbstractChainedBatch<typeof this, KDefault, VDefault>

    /**
        * Create an iterator. For example:
        *
        * ```js
        * for await (const [key, value] of db.iterator({ gte: 'a' })) {
        *   console.log([key, value])
        * }
        * ```
        */
    iterator(): AbstractIterator<typeof this, KDefault, VDefault>
    iterator<K = KDefault, V = VDefault>(
        options: AbstractIteratorOptions<K, V>
    ): AbstractIterator<typeof this, K, V>

    /**
     * Create a key iterator. For example:
     *
     * ```js
     * for await (const key of db.keys({ gte: 'a' })) {
     *   console.log(key)
     * }
     * ```
     */
    keys(): AbstractKeyIterator<typeof this, KDefault>
    keys<K = KDefault>(
        options: AbstractKeyIteratorOptions<K>
    ): AbstractKeyIterator<typeof this, K>

    /**
     * Create a value iterator. For example:
     *
     * ```js
     * for await (const value of db.values({ gte: 'a' })) {
     *   console.log(value)
     * }
     * ```
     */
    values(): AbstractValueIterator<typeof this, KDefault, VDefault>
    values<K = KDefault, V = VDefault>(
        options: AbstractValueIteratorOptions<K, V>
    ): AbstractValueIterator<typeof this, K, V>

    /**
     * Delete all entries or a range.
     */
    clear(): Promise<void>
};

export interface LevelDBConstructor<K = any, V = any> {
    new(path: string, options?: any): IAbstractLevel<K, V>;
}