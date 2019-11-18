import { Crypto } from './build';

const crypto = new Crypto('sdasda');

(async () => {
	const result = await crypto.api.eth.getNetworkInfo();
	console.log('reult', result);
})();

crypto.events.eth.subscribeBlock(123, 1);

crypto.api.eth.getNetworkInfo();
crypto.api.eth.subscribeToken();

crypto.events.eth.subscribeBlock(12, 10);
crypto.events.eth.unsubscribeBlock(12, 9);

crypto.events.eth.onMessageBlock((data) => {
	console.log('data clinet', data);
});

crypto.events.eth.close();
