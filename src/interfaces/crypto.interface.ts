import { ICryptoEvents } from './events/events.interface';
import { ICryptoApis } from './apis/apis.inteface';

export interface ICrypto {
	events: ICryptoEvents;
	api: ICryptoApis;
}
