import { ReactNode, useEffect } from 'react'
import { TriangleIcon } from '../Svg'

export default function ErrorCard({
  error,
  visible,
  autoHide = false,
  onChange
}: {
  error: ReactNode | undefined
  visible: boolean
  autoHide?: boolean
  onChange?: (v: boolean) => void
}) {
  useEffect(() => {
    let timer: number | undefined

    if (visible && autoHide) {
      timer = setTimeout(() => {
        if (onChange) {
          onChange(false)
        }
      }, 1000 * 10)
    }

    return () => clearTimeout(timer)
  }, [visible, onChange, autoHide])

  return (
    visible && (
      <div className='px-3 py-1 flex items-center gap-1 leading-6 my-2 bg-red-500'>
        <TriangleIcon className='w-5' />
        <div className='text-sm text-white'>{error}</div>
      </div>
    )
  )
}
