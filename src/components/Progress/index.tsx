export default function Progress({ percent }: { percent: number | undefined }) {
  return (
    <div className='h-4 relative bg-[#181920]'>
      <div
        className="h-4 absolute left-0 top-0 bottom-0 bg-repeat bg-[length:16px_16px] bg-[url('/images/bgs/ProgressBg.png')] bg-[#00FFFF] "
        style={{ width: `${percent && percent > 100 ? 100 : percent ?? '0'}%` }}></div>
    </div>
  )
}
