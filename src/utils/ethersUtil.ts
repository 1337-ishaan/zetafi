// src/ethersUtils.ts
import { ethers } from "ethers";
import { treasury } from "../constants/contracts/Treasury";
import { grid } from "../constants/contracts/Grid";
import { currRpc } from "../constants/chain-config/rpc";
import { chainIds } from "../constants/chain-config/chainIds";

let provider: ethers.BrowserProvider | undefined;
let treasuryContract: ethers.Contract | undefined;
let gridContract: ethers.Contract | undefined;

console.log(provider, "provider");

export const initEthers = async () => {
  if (window.ethereum) {
    // await window.ethereum.enable();
    provider = new ethers.BrowserProvider(window.ethereum);
    let signer = provider && (await provider.getSigner());
    console.log(signer, "signer");
    const { chainId } = await provider.getNetwork();
    const strChainId: number = +chainId.toString() ?? 5;
    console.log(strChainId, "cid");
    if (chainIds.includes(strChainId)) {
      treasuryContract = new ethers.Contract(
        treasury?.[strChainId].contractAddress,
        treasury[strChainId].abi,
        signer
      );
      console.log(treasuryContract, "signer");

      gridContract = new ethers.Contract(
        grid?.[strChainId]?.contractAddress,
        grid?.[strChainId]?.abi,
        signer
      );
    }
  } else {
    console.error(
      "Please install MetaMask or any other Web3-compatible browser."
    );
  }
};

export const getEthers = () => {
  console.log(provider, treasuryContract, gridContract);
  if (!provider || !treasuryContract || !gridContract) {
    throw new Error("Ethers.js is not initialized.");
  }
  return { provider, treasuryContract, gridContract };
};
