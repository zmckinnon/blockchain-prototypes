import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import usdcSmartContractAbi from "./usdc/usdc-smart-contract-abi.json";

export class MetaMaskService {
  private usdcSmartContractAddress =
    "0xe27658a36cA8A59fE5Cc76a14Bde34a51e587ab4"; // TODO: Move this to configuration
  private web3: Web3;
  private usdcContract: Contract;

  constructor() {
    this.web3 = new Web3(Web3.givenProvider);
    this.usdcContract = new this.web3.eth.Contract(
      usdcSmartContractAbi as AbiItem[],
      this.usdcSmartContractAddress
    );
  }

  public isAvailable(): boolean {
    return (window as any).ethereum?.isMetaMask;
  }

  public async getAccounts(): Promise<CryptoAccount[]> {
    const accounts = await this.web3.eth.requestAccounts();
    return accounts.map((x) => {
      return { address: x } as CryptoAccount;
    });
  }

  public async getUsdBalance(cryptoAccount: CryptoAccount): Promise<number> {
    return await this.usdcContract.methods
      .balanceOf(cryptoAccount.address)
      .call();
  }

  public async sendUsd(
    amount: number,
    address: string,
    fromAccount: CryptoAccount
  ): Promise<string> {
    const transaction = await this.usdcContract.methods
      .transfer(address, amount)
      .send({ from: fromAccount.address });
    return transaction.transactionHash;
  }
}

class CryptoAccount {
  public address!: string;
}
