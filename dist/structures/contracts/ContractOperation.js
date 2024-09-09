"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractOperation = void 0;
const viem_1 = require("viem");
const ContractOperationResult_1 = require("./ContractOperationResult");
class ContractOperation {
    constructor(client, config) {
        this.client = client;
        this.config = config;
    }
    _parseArgs() {
        const args = this.config.args;
        return this.config.abi[0].inputs.map(arg => args[arg.name]);
    }
    /**
     * Execute a contract function directly on the blockchain.
     *
     * @returns A `ContractOperationResult` instance which contains the transaction hash
     */
    async execute() {
        const { request } = await this.client.public.simulateContract({
            ...this.config,
            args: this._parseArgs(),
        });
        const hash = await this.client.wallet.writeContract(request);
        return new ContractOperationResult_1.ContractOperationResult(hash, this.client);
    }
    /**
     * Simulate a contract function call.
     *
     * @returns The result of the contract call
     */
    async simulate() {
        return await this.client.public.simulateContract({
            ...this.config,
            args: this._parseArgs(),
        });
    }
    /**
      * Get the transaction data for a contract call, which can be used to send a transaction
      *
      * @returns The transaction data
      */
    async getTxData() {
        const functionData = (0, viem_1.encodeFunctionData)({
            abi: this.config.abi,
            functionName: this.config.functionName,
            args: this._parseArgs(),
        });
        return {
            to: this.config.address,
            data: functionData,
            account: this.config.account,
            chain: this.config.chain,
        };
    }
}
exports.ContractOperation = ContractOperation;
