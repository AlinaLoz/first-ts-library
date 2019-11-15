export interface IHttpConnection {
    request(): Promise<any>;
}
