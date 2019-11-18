import { IEthAddressApi } from '../interfaces/apis/eth/eth.api.services/eth.address.api.interface';
import { IEthMainInfoApi } from '../interfaces/apis/eth/eth.api.services/eth.main.info.interface';
import { IEthNotifyApi } from '../interfaces/apis/eth/eth.api.services/eth.notify.api.interface';
import { IEthContractApi } from '../interfaces/apis/eth/eth.api.services/eth.contract.api.interface';
import { IEthRawTransactionApi } from '../interfaces/apis/eth/eth.api.services/eth.raw.transaction.interface';
import { IEthEvents } from '../interfaces/events/eth/eth.events.interface';

const TYPES_DEPENDENCIES = {
	ICrypto: 'ICrypto',
	ICryptoApis: 'ICryptoApis',
	ICryptoEvents: 'ICryptoEvents',
	IEthApi: 'IEthApi',
	IEthEvents: 'IEthEvents',
	IEthAddressApi: 'IEthAddressApi',
	IEthMainInfoApi: 'IEthMainInfoApi',
	IEthNotifyApi: 'IEthNotifyApi',
	IEthContractApi: 'IEthContractApi',
	IEthRawTransactionApi: 'IEthRawTransactionApi',
};

export { TYPES_DEPENDENCIES };
