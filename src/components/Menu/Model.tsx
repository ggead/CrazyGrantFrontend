import { useNavigate } from 'react-router-dom'
import CloseButton from '../CloseButton'
import menus from './menus'

export default function Model({
  open,
  onOpenChange,
  onOpenAboutChange
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  onOpenAboutChange: (v: boolean) => void
}) {
  const navigate = useNavigate()

  return (
    open && (
      <div className='flex flex-col justify-between fixed left-0 right-0 bottom-0 top-0 bg-[#181921] z-50' style={{pointerEvents: 'auto'}}>
        <div className='flex justify-end p-3'>
          <CloseButton onClick={() => onOpenChange(false)} />
        </div>

        <div className='px-6 py-12'>
          {menus.map(item => (
            <div
              key={item.name}
              className={`cursor-pointer text-[#ECF0F2] font-semibold text-lg mb-11 last:mb-0`}
              onClick={() => {
                onOpenChange(false)

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
      </div>
    )
  )
}
