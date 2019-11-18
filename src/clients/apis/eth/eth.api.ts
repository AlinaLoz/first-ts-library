import { inject, injectable } from 'inversify';

import { TYPES_DEPENDENCIES } from '../../../constants/inversify.constants';

import { IEthApi } from '../../../interfaces/apis/eth/eth.api.interface';
import { IEthAddressApi } from '../../../interfaces/apis/eth/eth.api.services/eth.address.api.interface';
import { IEthMainInfoApi } from '../../../interfaces/apis/eth/eth.api.services/eth.main.info.interface';
import { IEthContractApi } from '../../../interfaces/apis/eth/eth.api.services/eth.contract.api.interface';
import { IEthNotifyApi } from '../../../interfaces/apis/eth/eth.api.services/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../../../interfaces/apis/eth/eth.api.services/eth.raw.transaction.interface';

@injectable()
export class EthApi implements IEthApi {

	constructor(
		@inject(TYPES_DEPENDENCIES.IEthMainInfoApi) private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DEPENDENCIES.IEthAddressApi) private readonly ethAddress: IEthAddressApi,
		@inject(TYPES_DEPENDENCIES.IEthNotifyApi) private readonly ethNotify: IEthNotifyApi,
		@inject(TYPES_DEPENDENCIES.IEthContractApi) private readonly ethContract: IEthContractApi,
		@inject(TYPES_DEPENDENCIES.IEthRawTransactionApi) private readonly ethRawTransaction: IEthRawTransactionApi,
	) {}

	getNetworkInfo() {
		return this.ethAddress.getNetworkInfo();
	}

	subscribeToken() {
		return this.ethNotify.subscribeToken();
	}

	unsubscribeToken() {
		return this.ethNotify.unsubscribeToken();
	}
}
