export interface IEthNotifyApi {
	subscribeToken(): Promise<void>;
	unsubscribeToken(): Promise<void>;
}
