export const treasury: Record<string, { contractAddress: string; abi: any }> = {
  5: {
    contractAddress: "0x56E43728bb34D1cF5f4AEB28d0ad24e55A2d5739",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "address",
            name: "connectorAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "zetaConsumerAddress",
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
            name: "redeemer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountEarned",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountBurned",
            type: "uint256",
          },
        ],
        name: "Redeemed",
        type: "event",
      },
      {
        inputs: [],
        name: "REDEEM_MESSAGE",
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
        name: "WITHDRAW_TOKEN_MESSAGE",
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
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "claimableAmount",
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
            internalType: "bytes32",
            name: "message",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
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
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "totalSupply",
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
        name: "withdrawEther",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawToken",
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
    contractAddress: "0x7853FFe6cC518086bFcED822bDc5cb41B328672f",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "address",
            name: "connectorAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "zetaConsumerAddress",
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
            name: "redeemer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountEarned",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountBurned",
            type: "uint256",
          },
        ],
        name: "Redeemed",
        type: "event",
      },
      {
        inputs: [],
        name: "REDEEM_MESSAGE",
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
        name: "WITHDRAW_TOKEN_MESSAGE",
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
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "claimableAmount",
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
            internalType: "bytes32",
            name: "message",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
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
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "totalSupply",
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
        name: "withdrawEther",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "withdrawToken",
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
// https://goerli.etherscan.io/address/0xF4625DB400debf736C8f2940B742Ef851909Db11
