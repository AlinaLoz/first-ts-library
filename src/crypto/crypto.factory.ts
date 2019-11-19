import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

import { diContainer } from '../configuration/di.container';

function cryptoFactory(options: ICryptoConfig): ICrypto {
	const crypto = diContainer.get<ICrypto>(TYPES_DEPENDENCIES.ICrypto);
	crypto.setConfig(options);
	return crypto;
}

export { cryptoFactory as Crypto };
