function addNetwork() {
        window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                        chainId: "0x1469ca",
                        chainName: "Kiln",
                        nativeCurrency: {
                                name: 'Testnet ETH',
                                symbol: 'ETH',
                                decimals: 18
                        },
                        rpcUrls: ["https:\/\/rpc.kiln.themerge.dev"],
                        blockExplorerUrls: ["https:\/\/explorer.kiln.themerge.dev"]
                }]
        }).catch((error) => {
                console.log(error)
        })
}