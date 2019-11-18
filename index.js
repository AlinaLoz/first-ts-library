const liba = require('./cryptoapi/build/src');

const crypto = new liba.Crypto('sdasda');

// (async () => {
// 	const result = await crypto.api.apis.apis.getNetworkInfo();
// 	console.log('reult', result);
// })();
//
// crypto.eth.events.apis.subscribeBlock(123, 1);
//
// crypto.api.apis.apis.getNetworkInfo();
// crypto.api.apis.apis.subscribeToken();
//
// crypto.eth.events.apis.subscribeBlock(12, 10);
// crypto.eth.events.apis.unsubscribeBlock(12, 9);
//
// crypto.eth.events.apis.onMessageBlock((data) => {
// 	console.log('data clinet', data);
// });
//
// crypto.eth.events.apis.close();
