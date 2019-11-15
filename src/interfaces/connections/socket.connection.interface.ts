import { Observable } from 'rxjs/Observable';

export interface ISocketConnection {
    send(type: string, message: any): void;
    onMessage(type: string): Observable<any>;
}
