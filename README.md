# Crypto API Library

### Folder structure
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    │   ├── clients             # Clients for fork with api and socket/
    │   │   ├── apis            # 
    │   │   ├── events          # 
    ├── constants               # All library constants
    ├── dtos                    # All of dto to interactive between librarys components.
    ├── errors                  # Base and inheritance errors.
    ├── interfaces   
    ├── di.container.ts                
    ├── crypto-wrapper.ts       # CryptoWrapper class return new crypto with all injection.    
    ├── crypto.ts               # Exporting crypto library client.
    ├── index.ts                # File of exports.
    ├── LICENSE
    └── README.md


### Example
```
import { Crypto } from 'cryptoapi';

const crypto = new Crypto('sdasda');

const result = await crypto.api.eth.getNetworkInfo();

crypto.events.eth.subscribeBlock(123, 1);

crypto.api.eth.getNetworkInfo();
crypto.api.eth.subscribeToken();

crypto.events.eth.subscribeBlock(12, 10);
crypto.events.eth.unsubscribeBlock(12, 9);

crypto.events.eth.onMessageBlock((data) => console.log('data clinet', data));

crypto.events.eth.close();
    
```
