# Check Account Balance using JS

The goal of this prototype is to show the account balance of my account.

## Libraries

I am gonna use [web3.js](https://github.com/ChainSafe/web3.js) because it seems to be the most popular and I wanna start getting used to it.

You can get the balance of an account AND convert it from wei to ETH with a couple of simple functions:

```
const balanceWei = await web3.eth.getBalance(account);
const balanceEth = Web3.utils.fromWei(balanceWei);
```

## Thoughts

web3.js is just a little cumbersome to setup, but it is really well documented and it helps a ton. Reading account balance information was easy peasy.
