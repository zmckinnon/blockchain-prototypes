# Transact Ethereum on the Testnet using JS

The goal of this prototype is to actually transfer ETH on the testnet in a browser. I want to click a button to transfer some small amount of ETH from one account to another. I then want to see that transaction on Etherscan.

# Specs

**Determine if Wallet is Installed**

If wallet is installed, then it puts an ethereum property on the window object so it's simple to determine whether it is installed.

```
typeof window.ethereum !== "undefined"
```

**Request Accounts**

You can request accounts that are available in your installed wallet.

```
window.ethereum.request({
    method: "eth_requestAccounts",
});
```

**Send Transaction**

You can send a transaction with your wallet.

```
window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
        {
            from: accountAddress,
            to: walletAddress,
            value: numberToHex(1),
        },
    ],
})
```

# Libraries

There are a handful of "convenience libraries" that help you do blockchain transactions:

- [ethers](https://github.com/ethers-io/ethers.js)
- [web3.js](https://github.com/ChainSafe/web3.js)
- [truffle](https://www.trufflesuite.com/)
- [Embark](https://framework.embarklabs.io/)

In this example, I am only using the library that is available on the window object (which in my case is put there by MetaMask).

# Thoughts

I can already see the value in using a library to make these calls. But it seems pretty simple to get accounts and create transactions using the standard JS APIs.
