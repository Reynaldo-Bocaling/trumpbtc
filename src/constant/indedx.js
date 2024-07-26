import x from "/img/socials/x.png";
import tele from "/img/socials/tele.png";
import dextool from "/img/socials/dextool.png";
import uniswap from "/img/socials/uniswap.png";

export const navlinks = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Tokenomics",
    url: "#tokenomics",
  },
  {
    label: "How To Buy",
    url: "#howtobuy",
  },
];

export const tokenomicsData = [
  {
    label: "supply",
    value: "21,000,000.00",
  },
  {
    label: "LP",
    value: "BURNED",
  },
  {
    label: "CONTRACT",
    value: "RENOUNCED",
  },
  {
    label: "TAXT",
    value: "0/0",
  },
];

export const howtobuy = [
  {
    title: "SET UP METAMASK",
    instructions: [
      "If you don't have MetaMask yet, install the browser extension from metamask_io.",
      "Create a new wallet or import an existing one by following the on-screen instructions. Make sure to save your recovery phase in a secure location  ",
    ],
    variant: "md:translate-y-0",
  },
  {
    title: "ADD FUNDS TO METAMASK",
    instructions: [
      "Open Metamask and ensure you are on the correct network (typically Ethernet Mainnet)",
      'Click on "Buy" to Purchase Ethernet (ETH) through the available methods (credit card, bank transfer, etc.) or send ETH from another wallet to your MetaMask address.',
    ],
    variant: "md:-translate-y-16",
  },
  {
    title: "ADD $FIGHT TO METAMASK",
    instructions: [
      'Click on "Add Token" in the Assets tab in Metamask',
      'Select "Custom Token  and paste the FightCoin contract address ',
      "Fillin the token details if they do not auto-populate (Token Name: Fight, Symbol: FIGHT, Decimals: 18)",
    ],
    variant: "md:-translate-y-24",
  },
  {
    title: "ADD $FIGHT TO METAMASK",
    instructions: [
      "Go to a decentralized exchange (DEX) like Uniswap",
      "Connect your MetaMask wallet to the DEX.",
      "Select the amount of ETH you want to trade for FightCoin and confirm the transaction",
    ],
    variant: "md:-translate-y-32",
  },
];

export const social = [
  {
    label: "twitter",
    icon: x,
    url: "",
  },
  {
    label: "telegram",
    icon: tele,
    url: "",
  },
  {
    label: "dexscreener",
    icon: dextool,
    url: "",
  },
  {
    label: "pancakeSwap",
    icon: uniswap,
    url: "",
  },
];
