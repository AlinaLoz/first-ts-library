import { TYPES_DEPENDENCIES } from './constants/inversify.constants';

import { ICrypto } from 'interfaces/crypto.interface';
import { ICryptoApis, ICryptoEvents } from './interfaces';

import { diContainer } from './di.container';
import { Crypto } from './crypto';

export class CryptoWrapper extends Crypto implements ICrypto {
	constructor(token: string) {
		const apis = diContainer.get<ICryptoApis>(TYPES_DEPENDENCIES.ICryptoApis);
		const events = diContainer.get<ICryptoEvents>(TYPES_DEPENDENCIES.ICryptoEvents);
		super(token, apis, events);
	}
}
