import { CryptoClient } from './core/crypto.client';

export {
    IConnectConfig,
    ICryptoSocketClient,
    ICryptoHttpClient,
    IEthAPIS,
    IMarketApis,
} from './interfaces';

const cryptoClient = new CryptoClient();
export { CryptoClient, cryptoClient };


