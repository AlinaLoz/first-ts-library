import { ICryptoEvents } from '../../interfaces';
import { IEthEvents } from '../../interfaces/events/eth/eth.events.interface';
import { inject, injectable } from 'inversify';
import { TYPES_DEPENDENCIES } from '../../constants/inversify.constants';

@injectable()
export class CryptoEvents implements ICryptoEvents {
	eth: IEthEvents;

	constructor(
		@inject(TYPES_DEPENDENCIES.IEthEvents) eth: IEthEvents,
	) {
		this.eth = eth;
	}
}
