export const grid: Record<string, { contractAddress: string; abi: any }> = {
  5: {
    contractAddress: "0x7c7A83120f42c261C8f28BDD556Bf17a69CbAba7", // 0.0001ETH
    // contractAddress: "0xD62EF1cE108a0cA141435af0aC137A4aC420fdDf",// 0.01ETH
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_treasury",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "address",
            name: "zetaConsumerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "connectorAddress",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "ErrorApprovingZeta",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidAddress",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
        ],
        name: "InvalidCaller",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidDestinationChainId",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidMessageType",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidTransferCaller",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidZetaMessageCall",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidZetaRevertCall",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferStarted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "purchaseCount",
            type: "uint256",
          },
        ],
        name: "PlotPurchase",
        type: "event",
      },
      {
        inputs: [],
        name: "BUY_PLOT_MESSAGE",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "buyPlot",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "connector",
        outputs: [
          {
            internalType: "contract ZetaConnector",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "crossChainPurchase",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "startCoord",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endCoord",
            type: "uint256",
          },
        ],
        name: "getAllOwners",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "startCoord",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endCoord",
            type: "uint256",
          },
        ],
        name: "getAllPurchaseCounts",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getMintPerPlot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getOwnerCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "getPlotPurchaseCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "interactorsByChainId",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "mintPerPlot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bytes",
                name: "zetaTxSenderAddress",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "sourceChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "destinationAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "zetaValue",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "message",
                type: "bytes",
              },
            ],
            internalType: "struct ZetaInterfaces.ZetaMessage",
            name: "zetaMessage",
            type: "tuple",
          },
        ],
        name: "onZetaMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "address",
                name: "zetaTxSenderAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "sourceChainId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "destinationAddress",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "remainingZetaValue",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "message",
                type: "bytes",
              },
            ],
            internalType: "struct ZetaInterfaces.ZetaRevert",
            name: "zetaRevert",
            type: "tuple",
          },
        ],
        name: "onZetaRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "pendingOwner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "plotsOwned",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "price",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "contractAddress",
            type: "bytes",
          },
        ],
        name: "setInteractorByChainId",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "token",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "treasury",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
  },
  80001: {
    contractAddress: "0xA619E2b5AAF0f965De211E3fD59745f949E2d04e", // 0.0001ETH
    // contractAddress: "0xD62EF1cE108a0cA141435af0aC137A4aC420fdDf",// 0.01ETH
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_treasury",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "address",
            name: "zetaConsumerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "connectorAddress",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "ErrorApprovingZeta",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidAddress",
        type: "error",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
        ],
        name: "InvalidCaller",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidDestinationChainId",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidMessageType",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidTransferCaller",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidZetaMessageCall",
        type: "error",
      },
      {
        inputs: [],
        name: "InvalidZetaRevertCall",
        type: "error",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferStarted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "purchaseCount",
            type: "uint256",
          },
        ],
        name: "PlotPurchase",
        type: "event",
      },
      {
        inputs: [],
        name: "BUY_PLOT_MESSAGE",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "buyPlot",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "connector",
        outputs: [
          {
            internalType: "contract ZetaConnector",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "crossChainPurchase",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "startCoord",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endCoord",
            type: "uint256",
          },
        ],
        name: "getAllOwners",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "startCoord",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endCoord",
            type: "uint256",
          },
        ],
        name: "getAllPurchaseCounts",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getMintPerPlot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getOwnerCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "getPlotPurchaseCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "interactorsByChainId",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "mintPerPlot",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "bytes",
                name: "zetaTxSenderAddress",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "sourceChainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "destinationAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "zetaValue",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "message",
                type: "bytes",
              },
            ],
            internalType: "struct ZetaInterfaces.ZetaMessage",
            name: "zetaMessage",
            type: "tuple",
          },
        ],
        name: "onZetaMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "address",
                name: "zetaTxSenderAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "sourceChainId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "destinationAddress",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "remainingZetaValue",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "message",
                type: "bytes",
              },
            ],
            internalType: "struct ZetaInterfaces.ZetaRevert",
            name: "zetaRevert",
            type: "tuple",
          },
        ],
        name: "onZetaRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "pendingOwner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "plotsOwned",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "coord",
            type: "uint256",
          },
        ],
        name: "price",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "contractAddress",
            type: "bytes",
          },
        ],
        name: "setInteractorByChainId",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "token",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "treasury",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
  },
};
