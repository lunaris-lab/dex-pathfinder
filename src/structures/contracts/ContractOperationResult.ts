import { Hash, TransactionReceipt } from "viem";
import { IViemConfig } from "../../types/Client";

export class ContractOperationResult {
    constructor(public hash: Hash, protected client: IViemConfig) { };

    async waitForReceipt(confirmations: number = 1): Promise<TransactionReceipt> {
        return await this.client.public.waitForTransactionReceipt(
            {
                hash: this.hash,
                confirmations,
            },
        )
    };
}