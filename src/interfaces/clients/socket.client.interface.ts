export interface ICryptoSocketClient {

    subscribeBlock(params: any[]): void;
    unsubscribeBlock(): void;

    subscribeTransaction(params: any[]): void;
    unsubscribeTransaction(): void;

    onMessageBlock(cd: Function);
    onMessageTransfer(cd: Function);
    onMessageTransaction(cd: Function);

    close(): void;
}
