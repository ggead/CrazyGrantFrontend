import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import './index.scss'

export default function AppBody() {
  return (
    <div className='h-screen flex flex-col pt-16 relative'>
      <Header />
      <div className='flex-[1] h-fit pb-24'>
        <Outlet />
      </div>
      <img className='app-body-bg' src='/images/bgs/BodyBg.png' />
    </div>
  )
}
