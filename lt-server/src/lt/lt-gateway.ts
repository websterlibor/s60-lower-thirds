import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class LtGateway {
    @WebSocketServer()
    server: Server;


    sendToPreview(data: any) {
        this.server.emit('preview', data);
        //this.server.send(test);
    }

    sendToPublic(data: any) {
        this.server.emit('public', data);
        //this.server.send(test);
    }


    @SubscribeMessage('preview')
    subscribePreview(@MessageBody() data: any): Observable<WsResponse<number>> {
        return data;
    }

    @SubscribeMessage('public')
    subscribePublic(@MessageBody() data: any): Observable<WsResponse<number>> {
        return data;
    }

}
