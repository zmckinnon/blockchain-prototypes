import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function App() {
  const metaMaskInstalled = typeof window.ethereum !== "undefined";
  const walletAddress = "0x5457d5BeeF671e99e4241970363FA5192015C23E";
  const [transactionHash, setTransactionHash] = useState(null);
  let transactionHashUrl = `https://ropsten.etherscan.io/tx/${transactionHash}`;
  const [accountAddress, setAccountAddress] = useState(null);

  const numberToHex = (amountOfEth) => {
    return `0x${amountOfEth.toString(16)}`;
  };

  const connectMetaMaskWallet = async () => {
    try {
      var accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setAccountAddress(accounts[0]);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  const sendPayment = async () => {
    try {
      const transaction = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accountAddress,
            to: walletAddress,
            value: numberToHex(1),
          },
        ],
      });
      if (transaction != null) {
        setTransactionHash(transaction);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div>
      {metaMaskInstalled && (
        <Alert variant="success">MetaMask is installed!</Alert>
      )}
      {!metaMaskInstalled && (
        <Alert variant="danger">MetaMask is not installed.</Alert>
      )}
      {metaMaskInstalled && (
        <>
          <div>
            <Button onClick={connectMetaMaskWallet}>
              Connect MetaMask Wallet
            </Button>
          </div>
          <div>
            {accountAddress != null && (
              <>
                <div>
                  <div>Send payment from: {accountAddress}</div>
                  <div>Send payment to: {walletAddress}</div>
                </div>
                <Button onClick={sendPayment}>Send Payment</Button>
              </>
            )}
          </div>
          <div>
            {transactionHash != null && (
              <a href={transactionHashUrl} target="_blank" rel="noreferrer">
                View Transaction on Etherscan
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
