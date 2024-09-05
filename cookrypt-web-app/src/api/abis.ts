export const cookryptMainContractConfig = {
  address: "0xf596c72bC85F7F8bBA3fB3387a960A19804386bC",
  abi: [
    {
      inputs: [
        { internalType: "uint256", name: "_feePerUser", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        { indexed: false, internalType: "string", name: "tag", type: "string" },
      ],
      name: "TagRegistered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "advertiser",
          type: "address",
        },
        { indexed: false, internalType: "string", name: "tag", type: "string" },
        {
          indexed: false,
          internalType: "uint256",
          name: "usersCount",
          type: "uint256",
        },
      ],
      name: "UsersRequested",
      type: "event",
    },
    { stateMutability: "payable", type: "fallback" },
    {
      inputs: [],
      name: "feePerUser",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_userAddress", type: "address" },
      ],
      name: "getUserTagsByAddress",
      outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "platformOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_tag", type: "string" }],
      name: "registerTag",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_tag", type: "string" }],
      name: "requestUsersByTag",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_feePerUser", type: "uint256" },
      ],
      name: "setFeePerUser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "", type: "string" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "tagUsers",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "userTags",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;
