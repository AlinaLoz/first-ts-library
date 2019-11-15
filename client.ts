import {cryptoClient, ICryptoSocketClient} from './src/index';
import {ICryptoHttpClient} from "./src/interfaces";


cryptoClient.setCredentials('dsadasdasd');

const httpClient: ICryptoHttpClient = cryptoClient.httpClient;
const socketClient: ICryptoSocketClient = cryptoClient.socketClient;

(async () => {
    const result = await httpClient.eth.notify.subscribe();
    const info = await httpClient.eth.eth.getNetworkInfo();

    socketClient.subscribeBlock([1,2,2]);
    socketClient.subscribeBlock([12323, 2223]);
    socketClient.unsubscribeBlock();

    socketClient.onMessageBlock((data) => console.log(data))

})();


