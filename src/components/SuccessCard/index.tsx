import { ReactNode, useEffect } from 'react'
import { SuccessIcon } from '../Svg'

export default function SuccessCard({ tips, visible, onChange }: { tips: ReactNode | undefined; visible: boolean; onChange: (v: boolean) => void }) {
  useEffect(() => {
    let timer: number | undefined

    if (visible) {
      timer = setTimeout(() => {
        onChange(false)
      }, 1000 * 10)
    }

    return () => clearTimeout(timer)
  }, [visible, onChange])

  return (
    visible && (
      <div className='px-3 py-1 flex items-center gap-1 leading-6 my-2 bg-green-500'>
        <SuccessIcon className='w-5 h-5' />
        <div className='text-sm text-white'>{tips}</div>
      </div>
    )
  )
}
