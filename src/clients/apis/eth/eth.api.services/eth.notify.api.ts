import { IEthNotifyApi } from '../../../../interfaces/apis/eth/eth.api.services/eth.notify.api.interface';

export class EthNotifyApi implements IEthNotifyApi {
	subscribeToken(): Promise<void> {
		return undefined;
	}

	unsubscribeToken(): Promise<void> {
		return undefined;
	}
}
