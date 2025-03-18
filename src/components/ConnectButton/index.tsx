import { useConnectModal } from '@rainbow-me/rainbowkit'
import Button from '../Button'
import { ButtonProps } from '../Button/types'

export default function ConnectButton(props: ButtonProps) {
  const { openConnectModal } = useConnectModal()

  return (
    <Button {...props} onClick={openConnectModal}>
      Connect Wallet
    </Button>
  )
}
