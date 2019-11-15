export interface IEthAPI {
    getNetworkInfo();
}

export interface INotifyAPI {
    subscribe(): Promise<void>;
    unsubscribe(): Promise<void>;
}

export interface IEthAPIS {
    eth: IEthAPI;
    notify: INotifyAPI;
}
