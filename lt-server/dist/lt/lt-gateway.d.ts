import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';
export declare class LtGateway {
    server: Server;
    send(test: string): void;
    sendToPreview(data: any): void;
    sendToPublic(data: any): void;
    subscribePreview(data: any): Observable<WsResponse<number>>;
    subscribePublic(data: any): Observable<WsResponse<number>>;
}
