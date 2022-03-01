import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Web3 from "web3";

const App = () => {
  const web3 = new Web3(Web3.givenProvider);
  const [account, setAccount] = useState(
    "0x5457d5BeeF671e99e4241970363FA5192015C23E"
  );
  const [balance, setBalance] = useState(0);
  let addressHashUrl = `https://ropsten.etherscan.io/address/${account}`;

  const getAccountBalance = async () => {
    const balanceWei = await web3.eth.getBalance(account);
    const balanceEth = Web3.utils.fromWei(balanceWei);
    setBalance(balanceEth);
  };

  const handleOnChange = ({ target: { value } }) => {
    setAccount(value);
  };

  return (
    <div>
      <TextField
        required
        label="Account"
        value={account}
        onChange={handleOnChange}
      />
      <div>
        <Button variant="contained" onClick={getAccountBalance}>
          Get Balance
        </Button>
      </div>
      <div>{balance} ETH</div>
      <div>
        {account != null && (
          <a href={addressHashUrl} target="_blank" rel="noreferrer">
            View Account on Etherscan
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
