import {INotifyAPI} from "../../interfaces/apis/eth.apis.inteface";
import {IHttpConnection} from "../../interfaces/connections/http.connection.interface";
import {HttpConnection} from "../../connections/http.connection";

export class NotifyApi implements INotifyAPI{
    http: IHttpConnection;

    constructor() {
        this.http = new HttpConnection();
    }

    subscribe(): Promise<void> {
        return this.http.request();
    }

    unsubscribe(): Promise<void> {
        return undefined;
    }

}
