import { IHttpConnection } from "../interfaces/connections/http.connection.interface";

export class HttpConnection implements IHttpConnection {

    request(): Promise<any> {
        return new Promise((resolve, reject) => {
            setInterval(() => resolve('dasdsads'), 10);
        });
    }

}
