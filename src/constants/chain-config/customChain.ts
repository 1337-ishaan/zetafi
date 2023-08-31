import { Chain } from "@rainbow-me/rainbowkit";

export const zetachain: Chain = {
  id: 7001,
  name: "ZetaChain Athens 3 Testnet",
  network: "zetachain",
  iconUrl:
    "https://s3.coinmarketcap.com/static-gravity/image/901279d4611c458098fccee1c6076e36.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Zetachain",
    symbol: "ZETA",
  },
  rpcUrls: {
    public: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
    },
    default: { http: ["https://rpc.ankr.com/zetachain_evm_athens_testnet	"] },
  },
  blockExplorers: {
    default: { name: "Zetascan", url: "https://explorer.zetachain.com/" },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
  testnet: true,
};
