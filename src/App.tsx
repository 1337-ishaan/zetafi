import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  // mainnet,
  // polygon,
  // optimism,
  // bscTestnet,
  // arbitrum,
  // polygonMumbai,
  // zora,
  goerli,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWallet } from "./components/ConnectWallet";

import PixelMarketplace from "./components/PixelMarketplace";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { zetachain } from "./constants/chain-config/customChain";
const { chains, publicClient } = configureChains(
  [
    // mainnet, polygon, optimism, arbitrum, zora,
    // mantleTestnet,
    // bscTestnet,
    // polygonMumbai,
    goerli,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "ZETA",
  projectId: "af9877be5b6b4f0a4a7e849bbd2c046f",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  const [isMyPlots, setIsMyPlots] = React.useState(false);

  const showMyPlots = () => {
    setIsMyPlots(!isMyPlots);
  };
  const hideMyPlots = () => {
    setIsMyPlots(false);
  };

  React.useEffect(() => {
    if (isMyPlots) {
      showMyPlots();
    } else {
      hideMyPlots();
    }
  }, []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
        <ConnectWallet
          isMyPlots={isMyPlots}
          showMyPlots={showMyPlots}
          hideMyPlots={hideMyPlots}
        />
        <PixelMarketplace
          isMyPlots={isMyPlots}
          showMyPlots={showMyPlots}
          hideMyPlots={hideMyPlots}
        />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
