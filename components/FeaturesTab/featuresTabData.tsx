import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    shortTitle: "Connect Wallet",
    title: "Step 1: Connect Your Wallet",
    desc1:
      "Start by connecting your wallet, such as Phantom or Solflare, to your preferred DEX platform. Make sure it’s funded with SOL for transaction fees.",
    desc2:
      "Ensure your wallet is compatible with Solana and connected to the correct network.",
    image: "/images/how-to-buy/connect-wallet-light.webp",
    imageDark: "/images/how-to-buy/connect-wallet-dark.webp",
  },
  {
    id: "tabTwo",
    shortTitle: "Find Trumpius Maximus Token",
    title: "Step 2: Find Trumpius Maximus Token on your DEX",
    desc1:
      "Go to your favorite DEX and search for the Trumpius Maximus token using its contract address. Double-check to ensure you're selecting the official token to avoid scams.",
    desc2:
      "You can copy the contract address from the official Trumpius Maximus website or social media channels, or click the button in the navigation.",
    image: "/images/how-to-buy/find-token-light.webp",
    imageDark: "/images/how-to-buy/find-token-dark.webp",
  },
  {
    id: "tabThree",
    shortTitle: "Swap Tokens",
    title: "Step 3: Swap for Trumpius Maximus",
    desc1:
      "Choose the SOL/Trumpius Maximus trading pair and enter the amount of SOL you'd like to swap. Review the transaction details before confirming.",
    desc2:
      "Once the transaction is complete, your Trumpius Maximus tokens will be added to your wallet balance.",
    image: "/images/how-to-buy/swap-light.webp",
    imageDark: "/images/how-to-buy/swap-dark.webp",
  },
];

export default featuresTabData;
