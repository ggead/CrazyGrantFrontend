import { TriangleIcon } from '../Svg'

export default function ErrorCard({ error }: { error: string | undefined }) {
  return (
    error && (
      <div className='px-3 py-1 flex items-center gap-1 leading-6 my-2 bg-red-500'>
        <TriangleIcon className='w-5' />
        <div className='text-sm text-white'>{error}</div>
      </div>
    )
  )
}
