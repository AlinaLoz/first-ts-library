import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';

import { diContainer } from '../configuration/di.container';

function cryptoFactory(token: string): ICrypto {
	const crypto = diContainer.get<ICrypto>(TYPES_DEPENDENCIES.ICrypto);
	//crypto.setCreds();
	return crypto;
}

export { cryptoFactory as Crypto };
