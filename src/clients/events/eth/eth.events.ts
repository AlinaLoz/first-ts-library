import { Map } from 'immutable';
import { IMessageEvent, w3cwebsocket } from 'websocket';
import { SUBSCRIPTIONS } from '../../../constants/events.constants';
import { IEthEvents } from '../../../interfaces/events/eth/eth.events.interface';

import { Event } from '../../../dtos/event.dto';

export class EthEvents implements IEthEvents {
	private _isListen: false;
	private _subscriptions: Map<string, Function[]>;

	// private _url: string;
	private _ws: w3cwebsocket;

	constructor() {
		this._ws = new w3cwebsocket('localhost:8080');
		this._subscriptions = Map({
			[SUBSCRIPTIONS.BLOCK]: [],
			[SUBSCRIPTIONS.TRANSACTION]: [],
			[SUBSCRIPTIONS.TRANSFER]: [],
			[SUBSCRIPTIONS.CONFIRMATION]: [],
		});
	}

	close() {
		this._ws.close();
	}

	subscribeBlock(countConfirmation: number, eventId: number) {
		this._ws.send(
			JSON.stringify({
				method: 'subscribe',
				params: ['new_block', countConfirmation],
				id: eventId,
			}),
		);
	}

	unsubscribeBlock(countConfirmation: number, eventId: number) {
		this._ws.send(
			JSON.stringify({
				method: 'unsubscribe',
				params: ['new_block', countConfirmation],
				id: eventId,
			}),
		);
	}

	private onMessage() {
		if (this._isListen) {
			return;
		}
		this._ws.onmessage = (event: IMessageEvent) => {
			// @ts-ignore
			const data: Event = JSON.parse(event.data);
			// @ts-ignore
			this._subscriptions.get(event.type).forEach(cb => cb());
		};
	}

	onMessageBlock(cb: () => void) {
		this.onMessage();
		this._subscriptions.get(SUBSCRIPTIONS.BLOCK).push(cb);
	}

	// subscribeTransaction(){
	//     this._socket.send('subscribe', JSON.stringify({ params: [
	//             'block',
	//             1,
	//         ], id: 1 }))
	// }
	//
	// unsubscribeTransaction(){
	//     this._socket.send('unsubscribe', JSON.stringify({ params: [
	//             'block',
	//             1,
	//         ], id: 1 }))
	// }
	//
	// onMessageBlock(cb: Function) {
	//     this._socket.onMessage('block')
	//         .subscribe(cb)
	// }
	//
	// onMessageTransfer(cb: Function) {
	//     this._socket.onMessage('transfer')
	//         .subscribe(cb)
	// }
	//
	// onMessageTransaction(cb: Function) {
	//     this._socket.onMessage('transfer')
	//         .subscribe(cb)
	// }
}
