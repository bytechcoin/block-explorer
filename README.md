# BytechCoin-Blockchain-Explorer
Block explorer for BytechCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon bytechcoind. It should be accessible from the Internet. Run bytechcoind with open port as follows:
```bash
./BytechCoind --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11127
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf

Donate: [BYTC] bYTCv37MHCKFsieeLBh62wi8vFZVUFEYpaxjf37YZ5whVLd8eF9oMS1agvuackfvVq7LvSyr4Eqt2BEysmFVskavDqCe74xMraL

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
