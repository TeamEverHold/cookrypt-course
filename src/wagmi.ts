import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Cookrypt Chrome Extension',
  projectId: '5173c718a17c6d9aa7f6e70b36b8821a',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    //...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    sepolia,
  ],
  ssr: true,
});