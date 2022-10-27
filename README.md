# Documentation

Ajouter un réseau dans metamask avec JavaScript.

* HTML
* JavaScript

```javascript

function addNetwork() {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
      chainId: "0x146a2e",
      chainName: "shandong-testnet",
      nativeCurrency: {
          name: 'Testnet ETH',
          symbol: 'ETH',
          decimals: 18
      },
      rpcUrls: ["https:\/\/rpc.shandong.ethdevops.io"],
      blockExplorerUrls: ["https:\/\/explorer.shandong.ethdevops.io"]
      }]
    }).catch((error) => {
      console.log(error)
    })
  }
```
