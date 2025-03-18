import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AboutModel from '../AboutModel'
import Model from './Model'
import { MenuIcon } from '../Svg'
import menus from './menus'

export default function Menu() {
  const [openAbout, onOpenAboutChange] = useState(false)
  const [openMenu, onOpenMenuChange] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <div className='md:flex hidden justify-center'>
        {menus.map(item => (
          <div
            key={item.name}
            className={`cursor-pointer mr-16 last:mr-0 text-[#8D8E9B] font-semibold ${item.path === location.pathname ? 'text-white' : ''}`}
            onClick={() => {
              if (item.model) {
                onOpenAboutChange(true)
                return
              }
              if (item.path) {
                navigate(item.path)
              }
            }}>
            {item.name}
          </div>
        ))}
      </div>
      <div className='md:hidden cursor-pointer absolute right-3' onClick={()=>onOpenMenuChange(true)}>
        <MenuIcon />
      </div>
      <Model open={openMenu} onOpenChange={onOpenMenuChange} onOpenAboutChange={onOpenAboutChange}/>
      <AboutModel open={openAbout} onOpenChange={onOpenAboutChange} />
    </>
  )
}
