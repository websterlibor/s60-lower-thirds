import { LtGateway } from "../lt-gateway";
export declare class LtController {
    ltGateway: LtGateway;
    constructor(ltGateway: LtGateway);
    sendMessage(): string;
    preview(data: any): Promise<any>;
    public(data: any): Promise<any>;
    testPreview(): string;
}
