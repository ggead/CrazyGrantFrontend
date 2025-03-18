import { ReactNode } from 'react'
import { SuccessIcon } from '../Svg'

export default function SuccessCard({ tips }: { tips: ReactNode | undefined }) {
  return (
    tips && (
      <div className='px-3 py-1 flex items-center gap-1 leading-6 my-2 bg-green-500'>
        <SuccessIcon className='w-5 h-5' />
        <div className='text-sm text-white'>{tips}</div>
      </div>
    )
  )
}
