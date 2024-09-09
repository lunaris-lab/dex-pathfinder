import { Hash, TransactionReceipt } from "viem";
import { IViemConfig } from "../../types/Client";
export declare class ContractOperationResult {
    hash: Hash;
    protected client: IViemConfig;
    constructor(hash: Hash, client: IViemConfig);
    waitForReceipt(confirmations?: number): Promise<TransactionReceipt>;
}
