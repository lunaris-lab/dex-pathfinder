import { IContractConfig } from "../../types/contracts";
export declare class ContractBuilder {
    protected instance: any;
    constructor(instance: any);
    protected setExtension(extension: any): any;
    protected build(config: IContractConfig): any;
}
