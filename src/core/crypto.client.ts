import {IConnectConfig, ICryptoHttpClient, ICryptoSocketClient} from '../interfaces/configs';
import {CryptoHttpClient} from "../clients/crypto.http.client";
import {CryptoSocketClient} from "../clients/crypto.socket.client";

export class CryptoClient {
       private _credentials: IConnectConfig = null;
       private _httpClient: ICryptoHttpClient = null;
       private _socketClient: ICryptoSocketClient = null;;

       constructor() {
       }

        setCredentials(_secret: string) {
            this._credentials = {
                _secret,
            };
        }

        private _checkCredentials(): boolean|Error {
            if (
                !this._credentials || !this._credentials._secret
            ) {
               throw new Error('No API Key Found. Please Set API Credentials.');
            }
            return true;
        }

        get httpClient() {
            if (!this._checkCredentials()) return null;
            if (!this._httpClient) {
                this._httpClient = new CryptoHttpClient();
            }
            return this._httpClient;
        }

        get socketClient() {
            if (!this._checkCredentials()) return null;
            if (!this._socketClient) {
                this._socketClient = new CryptoSocketClient();
            }
            return this._socketClient;
        }
}
