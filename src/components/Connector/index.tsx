import { ConnectButton } from '@rainbow-me/rainbowkit'
import Button from '../Button'
import Logo from './logo.png'
import useIsMobile from '../../hooks/useIsMobile'

export default function Connector() {
  const isMobile = useIsMobile()

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}>
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} scale={isMobile ? 'sm' : 'md'}>
                    Connect Wallet
                  </Button>
                )
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} variant='danger' scale={isMobile ? 'sm' : 'md'}>
                    Wrong network
                  </Button>
                )
              }
              return (
                <button
                  className={`flex justify-center box-border items-center shadow-[inset_-2px_2px_0_0_rgba(219,32,193,0.4),inset_2px_-2px_0_0_rgba(181,253,20,0.4)] bg-[#181921] px-3 ${
                    isMobile ? 'h-10' : 'h-12'
                  }`}
                  onClick={openAccountModal}
                  type='button'>
                  <img className='w-6 h-6 mr-2' src={Logo} />
                  <span className='font-semibold'>{account.displayName}</span>
                  <svg
                    className='ml-2'
                    width='8.577148'
                    height='6.744049'
                    viewBox='0 0 8.57715 6.74405'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <defs />
                    <path
                      d='M3.46 6.31L0.17 1.56C-0.28 0.9 0.19 0 1 0L7.57 0C8.38 0 8.85 0.9 8.39 1.56L5.11 6.31C4.71 6.88 3.86 6.88 3.46 6.31Z'
                      fill='#FFFFFF'
                      fill-opacity='1.000000'
                      fill-rule='evenodd'
                    />
                  </svg>
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
