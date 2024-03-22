import { useState } from "react";
import { networks, typeNetworkValue } from "@/const/const";
import Web3 from "web3";
import { useSDK } from "@metamask/sdk-react";

export function useForm() {
  const [typeNetwork, setTypeNetwork] = useState(typeNetworkValue.mainnet);
  const { sdk } = useSDK();

  const web3 = new Web3(window.ethereum);
  async function connectToMetaMask() {
    try {
      await sdk?.connect();
    } catch (error) {
      console.error("Failed", error);
    }
  }
  async function switchToNetwork(networkId: number) {
    try {
      await window.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${networkId.toString(16)}` }],
      });
    } catch (error) {
      console.error("Failed", error);
    }
  }
  async function sendTestCoins(toAddress: string, amount: string) {
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];

      const txObject = {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount, "ether"),
      };

      await web3.eth.sendTransaction(txObject);
    } catch (error) {
      console.error("Failed", error);
    }
  }

  async function addNetworkToMetamask(networkName: string) {
    try {
      await window.ethereum?.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  }

  return {
    connectToMetaMask,
    switchToNetwork,
    sendTestCoins,
    addNetworkToMetamask,
    network: {
      typeNetwork,
      setTypeNetwork,
    },
  };
}
