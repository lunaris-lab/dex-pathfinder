"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractOperationResult = void 0;
class ContractOperationResult {
    constructor(hash, client) {
        this.hash = hash;
        this.client = client;
    }
    ;
    async waitForReceipt(confirmations = 1) {
        return await this.client.public.waitForTransactionReceipt({
            hash: this.hash,
            confirmations,
        });
    }
    ;
}
exports.ContractOperationResult = ContractOperationResult;
