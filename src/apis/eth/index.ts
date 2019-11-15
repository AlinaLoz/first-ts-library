import { IEthAPI, EthApisInteface, INotifyAPI } from "../../interfaces/apis/eth.apis.inteface";
import { NotifyApi } from "./notify.api";

export class EthAPIs implements EthApisInteface {
    eth: IEthAPI;
    notify: INotifyAPI;
    // address: IAddressAPI;
    // contract: INotifyAPI;
    // rowTransactionAPI: IRowTransactionAPI;

    constructor() {
        this.eth = new EthAPIs();
        this.notify = new NotifyApi();
    }

}
