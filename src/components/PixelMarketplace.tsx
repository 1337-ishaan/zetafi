// src/components/PixelMarketplace.tsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { initEthers, getEthers } from "../utils/ethersUtil";
import { supabase } from "../utils/supabase";
import { useAccount, useNetwork } from "wagmi";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const PIXEL_SIZE = 68; // Size of each pixel in pixels (adjust as needed)
const BASE_PRICE = "0.0001"; // Base price in ethers (adjust as needed)

const PixelMarketplace = ({
  isMyPlots,
  showMyPlots,
  hideMyPlots,
}: {
  isMyPlots: any;
  showMyPlots: any;
  hideMyPlots: any;
}) => {
  const [pixels, setPixels] = useState<boolean[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { address } = useAccount();
  const [coords, setCoords] = React.useState<number[]>();
  const [purchased, setPurchased] = React.useState<any>([]);
  const [refetch, setRefetch] = React.useState<boolean>(false);
  const [openLoader, setOpenLoader] = React.useState(false);
  const [purchaseAmount, setPurchaseAmount] = React.useState<any>();
  const { chain } = useNetwork();
  useEffect(() => {
    const ethersInit = async () => {
      await initEthers()
        .then(() => {
          setIsLoading(false);
          loadPixels();
        })
        .catch((err) => console.error("Error initializing ethers.js:", err));
    };

    ethersInit();
  }, [chain]);

  useEffect(() => {
    getPixelData();
  }, [refetch]);

  useEffect(() => {
    if (isMyPlots) {
      getUserPlot();
    }
    getPixelData();
  }, [isMyPlots, refetch]);

  const getUserPlot = async () => {
    let { data: userPlots, error } = await supabase
      .from("Grid")
      .select("*")
      .eq("purchased_by", address);

    if (!error) {
      setPurchased(userPlots);
    }
  };
  const getPixelData = async () => {
    let { data: pixelData, error } = await supabase.from("Grid").select("*");

    const Grid = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Grid" },
        (payload) => {
          console.log("Change received!", payload);
          setRefetch(!refetch);
        }
      )
      .subscribe();
    if (!error) {
      setPurchased(pixelData);
    }
  };

  const storeToDb = async (
    coords: number,
    price: number,
    purchased_by: string,
    purchaseCount: number
  ) => {
    // storing to db

    console.log(price, purchaseCount, "price");
    if (purchaseCount === 0) {
      const { data, error } = await supabase
        .from("Grid")
        .insert([
          {
            coords,
            price,
            purchased_by,
            purchase_count: purchaseCount,
          },
        ])
        .select();
      if (!error) {
        return data;
      }
    } else {
      const { data, error } = await supabase
        .from("Grid")
        .update({ price, purchased_by, purchase_count: purchaseCount })
        .eq("coords", coords)
        .select();
      if (!error) {
        return data;
      }
    }
  };
  const loadPixels = async () => {
    const pixelData = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        const isOwned = false;
        row.push(isOwned);
      }
      pixelData.push(row);
    }
    setPixels(pixelData);
  };

  const ethersToWei = (ethersValue: string) => {
    const weiValue = ethers.parseEther(ethersValue);
    return weiValue.toString();
  };

  const buyPixel = async () => {
    toast.warn("Getting the army ready, king 👑");
    setOpenLoader(true);
    const { gridContract: contract } = getEthers();
    console.log(coords, "here");
    try {
      if (coords) {
        console.log(coords, "here");

        const coIndex = coords[0] + coords[1] * 99;
        const purchaseCount = await contract?.getPlotPurchaseCount(coIndex);
        console.log(purchaseCount);
        const amountToSend =
          (+BigInt(purchaseCount).toString() >= 2
            ? +BigInt(purchaseCount).toString()
            : 1) * +ethersToWei(BASE_PRICE);

        if (address) {
          // Send the transaction with the correct amount of Ether (in Wei)
          const overrides = {
            value: amountToSend,
          };
          const result = await contract.buyPlot(coIndex, overrides);
          toast.warning("Yep, its the last wave, hittin' on us 🔓!");
          await result.wait();
          if (result) {
            storeToDb(
              coIndex,
              amountToSend,
              address,
              +BigInt(purchaseCount).toString()
            );
            toast.success(`Captured asset - (${coords[0]}, ${coords[1]}) 🔐`);
            toast.success(`Received asset 0.0001 ZETA 💸`);

            setRefetch(!refetch);
          }
        }
      }
      setOpenLoader(false);
    } catch (err) {
      console.error("Error buying pixel:", err);
      toast.error(err + "");
      setOpenLoader(false);
    }
  };
  function weiToEthers(weiValue: number) {
    const ethersValue = ethers.formatEther(weiValue);
    return ethersValue;
  }

  const updatePurchasePrice = async (r: any, c: any) => {
    const { gridContract: contract } = getEthers();

    const coIndex = r + c * 99;
    const purchaseCount = await contract?.getPlotPurchaseCount(coIndex);
    const amountToSend =
      (+BigInt(purchaseCount).toString() >= 2
        ? +BigInt(purchaseCount).toString()
        : 1) * +ethersToWei(BASE_PRICE);
    setPurchaseAmount(weiToEthers(amountToSend));
  };
  if (isLoading) {
    return <div />;
  }

  return (
    <Grid container paddingX={5} paddingY={2}>
      {/* // <div style={{ display: "flex", padding: "10px 40px" }}> */}
      {/* <h1>Pixel Marketplace</h1> */}
      {address ? (
        <Grid item xs={7}>
          <div
            style={{
              display: "flex",
              flex: "1",
              width: "680px",
              flexWrap: "wrap",
              justifyContent: "center",
              boxShadow: "0px 0px 28px .1px rgba(0, 47, 35,1)",
            }}
          >
            {pixels.map((row, rowIndex) =>
              row.map((isOwned, colIndex) => (
                <>
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="pixel-plot"
                    style={{
                      width: PIXEL_SIZE,
                      cursor: "pointer",
                      height: PIXEL_SIZE,
                      background: purchased.find(
                        ({ coords }: { coords: number }) =>
                          coords === rowIndex + colIndex * 99
                      )
                        ? "#d4ff5c"
                        : "rgba(212, 255, 92,.4)",

                      border: "1px solid #1e1e1e",
                      boxSizing: "border-box",
                    }}
                    onClick={() => {
                      setCoords([rowIndex, colIndex]);
                      updatePurchasePrice(rowIndex, colIndex);
                    }}
                  >
                    {/* {rowIndex + colIndex * 99} */}
                  </div>
                </>
              ))
            )}
          </div>
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={5} marginTop={4}>
        <Typography variant="h3" fontWeight={"bold"} gutterBottom>
          {address
            ? " Buy your own plot, get atleast what you put in!"
            : "Connect your wallet king!"}
        </Typography>
        <Divider variant="middle" />
        <br />

        {coords ? (
          <>
            <Grid container columnSpacing={2}>
              <Box
                paddingY={1}
                paddingX={4}
                width={"fit-content"}
                bgcolor={"#1e1e1e"}
                borderRadius={4}
              >
                <Grid item>
                  <Typography variant="h5" fontWeight={"bold"} gutterBottom>
                    ({coords[0]},{coords[1]})
                  </Typography>
                </Grid>
                {/* <div style={{ background: "red" }}>{coords && coords[0]}</div> */}
                {/* <div style={{ background: "red" }}>{coords && coords[1]}</div> */}
              </Box>
              <Grid
                item
                alignContent={"center"}
                alignItems="center"
                display={"flex"}
              >
                <Button
                  onClick={() => buyPixel()}
                  style={{ height: "fit-content" }}
                  variant="contained"
                >
                  Buy Plot
                </Button>
              </Grid>
            </Grid>
            <Grid item marginTop={2}>
              <Typography variant="h5" fontWeight={"bold"} gutterBottom>
                Purchase Price: {purchaseAmount} ETH
              </Typography>
              <Typography variant="h5" fontWeight={"bold"} gutterBottom>
                After Purchase Value: {purchaseAmount * 2} ETH
              </Typography>
              <Typography variant="h5" fontWeight={"bold"} gutterBottom>
                Rewards: 0.0001 ZETA
              </Typography>

              <Typography
                color="#708090"
                variant="h5"
                fontWeight={"bold"}
                gutterBottom
              >
                ZETA = ERC20 Token created by Zetachain, used for incentivizing.
              </Typography>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Grid>
  );
};

export default PixelMarketplace;
