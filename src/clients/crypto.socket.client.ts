import {ISocketConnection} from "../interfaces/connections/socket.connection.interface";
import {ICryptoSocketClient} from "../interfaces";
import {SocketConnection} from "../connections/socket.connection";

export class CryptoSocketClient  implements ICryptoSocketClient  {

    private _socket: ISocketConnection;

    constructor(url: string) {
        this._socket = new SocketConnection(url);
    }

    subscribeBlock(params){
        this._socket.send('subscribe', JSON.stringify({ params: [
                'block',
                1,
            ], id: 1 }))
    }


    unsubscribeBlock(){
        this._socket.send('unsubscribe', JSON.stringify({ params: [
                'block',
                1,
            ], id: 1 }))
    }

    subscribeTransaction(){
        this._socket.send('subscribe', JSON.stringify({ params: [
                'block',
                1,
            ], id: 1 }))
    }

    unsubscribeTransaction(){
        this._socket.send('unsubscribe', JSON.stringify({ params: [
                'block',
                1,
        ], id: 1 }))
    }

    onMessageBlock(cb: Function) {
        this._socket.onMessage('block')
            .subscribe(cb)
    }

    onMessageTransfer(cb: Function) {
        this._socket.onMessage('transfer')
            .subscribe(cb)
    }

    onMessageTransaction(cb: Function) {
        this._socket.onMessage('transfer')
            .subscribe(cb)
    }

    close(): void {}
}
