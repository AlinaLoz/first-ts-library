import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { ICryptoApis } from '../../interfaces';
import { IEthApi } from '../../interfaces/apis/eth/eth.api.interface';
import { TYPES_DEPENDENCIES } from '../../constants/inversify.constants';

@injectable()
export class CryptoApis implements ICryptoApis {
	eth: IEthApi;

	constructor(
		@inject(TYPES_DEPENDENCIES.IEthApi) eth: IEthApi,
	) {
		this.eth = eth;
	}
}
