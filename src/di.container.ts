import { Container } from 'inversify';

import { TYPES_DEPENDENCIES } from './constants/inversify.constants';

import { ICryptoApis, ICryptoEvents } from './interfaces';
import { ICrypto } from './interfaces/crypto.interface';
import { IEthApi } from './interfaces/apis/eth/eth.api.interface';

import { CryptoApis } from './clients/apis/crypto.apis';
import { CryptoEvents } from './clients/events/crypto.events';
import { Crypto } from './crypto';
import { EthApi } from './clients/apis/eth/eth.api';

const diContainer = new Container();
diContainer.bind<ICrypto>(TYPES_DEPENDENCIES.ICrypto).to(Crypto);
diContainer.bind<ICryptoApis>(TYPES_DEPENDENCIES.ICryptoApis).to(CryptoApis);
diContainer.bind<ICryptoEvents>(TYPES_DEPENDENCIES.ICryptoApis).to(CryptoEvents);
diContainer.bind<IEthApi>(TYPES_DEPENDENCIES.IEthApi).to(EthApi);

export { diContainer };
