import { Button, Grid, Link, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useEnsAvatar } from "wagmi";
import { getEthers, initEthers } from "../utils/ethersUtil";
import Logo from "../assets/logo.png";

export const ConnectWallet = ({
  isMyPlots,
  showMyPlots,
  hideMyPlots,
}: {
  isMyPlots: any;
  showMyPlots: any;
  hideMyPlots: any;
}) => {
  const [token, setToken] = useState();

  // const { data: avatar } = useEnsAvatar({
  //   name: "blackbooks.eth",
  //   chainId: parseInt("5"),
  // });

  // console.log(avatar, "avatar");
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
    token,
    formatUnits: "wei",
  });

  useEffect(() => {
    const ethersInit = async () => {
      await initEthers();
      await getToken();
    };

    ethersInit();
  }, []);

  const getToken = async () => {
    const { gridContract: contract } = getEthers();
    const contractToken = await contract.token();
    setToken(contractToken);
  };
  const withdrawToken = async () => {
    const { gridContract: contract } = getEthers();

    await contract
      ?.withdrawTokens(token, balance?.formatted)
      .then(console.log)
      .catch(console.error);
  };

  const withdrawEther = async () => {
    const { treasuryContract: contract } = getEthers();

    console.log(await contract?.token(), balance?.formatted, "bf");
    await contract
      ?.redeem(balance?.formatted)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <>
      <Grid container paddingX={5} paddingTop={2}>
        <Grid item xs={6}>
          <ConnectButton chainStatus="icon" />
        </Grid>
        {/* <Grid item xs={4}>
          <img
            style={{ height: "420px" }}
            src={Logo}
            alt="Strategic Finance ($StratFi)"
          />
        </Grid> */}
        <Grid item xs={6} columnGap={2} display="flex" justifyContent="end">
          <Button>
            <Link
              color={"#000"}
              textTransform={"none"}
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://askishaancodes.notion.site/askishaancodes/Strategic-Finance-Mechanics-1e05a38b11e541a5bcfff48081561385"
            >
              MECHANICS 🏆
            </Link>
          </Button>
          <Button variant="contained" onClick={showMyPlots}>
            <Link
              color={"#000"}
              textTransform={"none"}
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://etherates-organization.gitbook.io/strategic-finance-usdstratfi-gamefi-less-than-greater-than-defi/"
            >
              Documentation
            </Link>
          </Button>
          {/* <Button variant="contained" onClick={withdrawToken}>
            Withdraw tokens
          </Button> */}
          <Button variant="contained" onClick={showMyPlots}>
            Show my Plots: {isMyPlots ? "Yes" : "No"}
          </Button>
          {/* <Button onClick={withdrawEther} variant="contained">
            Burn $StratFi
          </Button> */}
        </Grid>
      </Grid>
    </>
  );
};
