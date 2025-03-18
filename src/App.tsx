import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { WagmiProvider } from 'wagmi'
import wagmiConfig from './config/wagmi'
import { RainbowKitProvider, Theme, darkTheme } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient()

const rainbowKitTheme = merge(darkTheme(), {
  colors: {
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
  },
  radii: {
    menuButton: '8px'
  },
  shadows: {
    selectedOption: 'none'
  }
} as Theme)

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact' locale={'en-US'} theme={rainbowKitTheme}>
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
