import { useState } from "react";
import { MetaMaskService } from "./crypto/MetaMaskService.ts";

function App() {
  const metaMaskService = new MetaMaskService();
  const isMetaMaskAvailable = metaMaskService.isAvailable();
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");

  const connect = async () => {
    var accounts = await metaMaskService.getAccounts();
    setAccount(accounts[0]);
  };

  var checkUsdcBalance = async () => {
    var balance = await metaMaskService.getUsdBalance(account);
    setBalance(balance);
  };

  var sendUsdc = async () => {
    var transactionHash = await metaMaskService.sendUsd(
      300,
      "0x172864dd6d5913d2bB1BdF9d9e1699d6503e4361"
    );
    setTransactionHash(transactionHash);
  };

  return (
    <div>
      <button onClick={connect} disabled={!isMetaMaskAvailable}>
        Connect
      </button>
      <div>{account?.address}</div>
      <button onClick={checkUsdcBalance}>Check USDC Balance</button>
      <div>{balance}</div>
      <button onClick={sendUsdc}>Send USDC</button>
      <div>{transactionHash}</div>
    </div>
  );
}

export default App;
