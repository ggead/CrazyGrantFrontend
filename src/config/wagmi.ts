import { http, createConfig } from 'wagmi'
import { bscTestnet } from 'wagmi/chains'
import { createClient } from 'viem'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  binanceWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  okxWallet,
  coin98Wallet,
  bitgetWallet,
  trustWallet,
  argentWallet,
  injectedWallet,
  imTokenWallet,
  omniWallet,
  tokenPocketWallet,
  gateWallet
} from '@rainbow-me/rainbowkit/wallets'

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [binanceWallet, metaMaskWallet, okxWallet, bitgetWallet, coinbaseWallet, walletConnectWallet, tokenPocketWallet, rainbowWallet]
    },
    {
      groupName: 'More',
      wallets: [gateWallet, coin98Wallet, trustWallet, argentWallet, injectedWallet, imTokenWallet, omniWallet]
    }
  ],
  { appName: 'Crazy Grant', projectId: import.meta.env.VITE_WC_PROJECT_ID }
)

export default createConfig({
  chains: [bscTestnet],
  connectors,
  client({ chain }) {
    return createClient({ chain, transport: http() })
  }
})
