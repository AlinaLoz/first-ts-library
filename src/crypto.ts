import { ICryptoApis, ICryptoEvents } from './interfaces';
import { ICrypto } from './interfaces/crypto.interface';

export class Crypto implements ICrypto {
	constructor(
		private _token: string,
		private readonly  _api: ICryptoApis,
		private readonly _events: ICryptoEvents,
	) {}

	private _checkCredentials(): boolean | Error {
		if (!this._token) {
			throw new Error('Token not found.');
		}

		return true;
	}

	get events() {
		if (!this._checkCredentials()) {
			return null;
		}
		return this._events;
	}

	get api() {
		if (!this._checkCredentials()) {
			return null;
		}
		return this._api;
	}
}
