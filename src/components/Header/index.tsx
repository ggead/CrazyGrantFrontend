import Connector from '../Connector'
import Logo from '../Logo'
import Menu from '../Menu'

export default function Header() {
  return (
    <div className='flex flex-[0_0_64px] z-10 flex-row justify-between items-center fixed top-0 left-0 right-0 pl-6 md:pr-2 pr-[60px] h-16 bg-black'>
      <Logo />
      <Menu />
      <Connector />
    </div>
  )
}
