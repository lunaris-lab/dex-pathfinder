import { SimulateContractReturnType } from "viem";
import { SendTransactionParameters } from "viem/zksync";
import { IViemConfig } from "../../types/Client";
import { IContractOperationConfig } from "../../types/contracts";
import { ContractOperationResult } from "./ContractOperationResult";
export declare class ContractOperation {
    protected client: IViemConfig;
    protected config: IContractOperationConfig;
    constructor(client: IViemConfig, config: IContractOperationConfig);
    protected _parseArgs(): any[];
    /**
     * Execute a contract function directly on the blockchain.
     *
     * @returns A `ContractOperationResult` instance which contains the transaction hash
     */
    execute(): Promise<ContractOperationResult>;
    /**
     * Simulate a contract function call.
     *
     * @returns The result of the contract call
     */
    simulate(): Promise<SimulateContractReturnType>;
    /**
      * Get the transaction data for a contract call, which can be used to send a transaction
      *
      * @returns The transaction data
      */
    getTxData(): Promise<SendTransactionParameters>;
}
