import { networksType } from "@/type/type";

export const typeNetworkValue = {
  testnet: "Testnet",
  mainnet: "Mainnet ETH",
};
export const host = typeof window !== "undefined" ? window.location.host : "defaultHost";

export const sdkOptions = {
  logging: { developerMode: false },
  checkInstallationImmediately: false,
  dappMetadata: {
    name: "Next-Metamask-Boilerplate",
    url: host,
  },
};
export const networksChainId = {
  bnb: 56,
  eth: 1,
  bnbTestnet: 97,
};
export const networks: networksType = {
  bnbTestnet: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "BNB Chain Testnet",
    nativeCurrency: {
      name: "BNB Chain Testnet",
      symbol: "tBNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};
