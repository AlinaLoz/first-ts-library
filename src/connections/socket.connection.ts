import { ISocketConnection } from "../interfaces/connections/socket.connection.interface";
import { Observable } from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

// import { Message } from '../models/message';
// import { Event } from '../models/event';

export class SocketConnection implements ISocketConnection {

    private socket;

    constructor(baseUrl: string) {
        this.socket = socketIo(baseUrl);
    }

    public send(type: string, message: any): void {
        this.socket.emit(type, message);
    }

    public onMessage(type: string): Observable<T> {
        return new Observable<T>(observer => {
            this.socket.on(type, (data: T) => observer.next(data));
        });
    }

}
