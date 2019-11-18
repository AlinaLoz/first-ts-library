import { IApiClient } from './clients/api.client.interface';
import { IEventsClient } from './clients/events.client.interface';

export interface ICrypto {
	events: IEventsClient | null;
	api: IApiClient | null;
}
