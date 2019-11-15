import {IEthAPIS, IMarketApis} from "..";

export interface ICryptoHttpClient {
    eth: IEthAPIS;
    market: IMarketApis;
}
