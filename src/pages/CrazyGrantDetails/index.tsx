import { useNavigate } from 'react-router-dom'
import { ArrowLine2Icon, ArrowLineIcon, TokenLogoIcon } from '../../components/Svg'

export default function CrazyGrantDetials() {
  const navigate = useNavigate()

  return (
    <div className='shadow-[inset_4px_4px_0_0_#FFE43D,inset_-4px_-4px_0_0_#FF2CD3,4px_4px_0_0_#00FFFF] md:w-[940px] md:mt-11 mt-10 md:mx-auto mx-3 md:p-6 p-3 bg-black'>
      <div className='text-xl font-semibold cursor-pointer' onClick={() => navigate(-1)}>
        {'<-'}Token Details
      </div>
      <div className='flex md:flex-row flex-col md:justify-between md:items-center md:mt-7 mt-4'>
        <div className='flex md:flex-col flex-row justify-between items-center md:items-start'>
          <div className='text-[#ECF0F2] text-sm'>Total Supply</div>
          <div className='text-[#00FFFF] md:text-xl text-sm font-medium'>10,000,000 $CRAZY</div>
        </div>
        <div className='flex md:flex-col flex-row justify-between items-center md:items-start'>
          <div className='text-[#ECF0F2] text-sm'>TGE Mint Ratio</div>
          <div className='text-[#00FFFF] md:text-xl text-sm font-medium'>10%</div>
        </div>
        <div className='flex md:flex-col flex-row justify-between items-center md:items-start'>
          <div className='text-[#ECF0F2] text-sm'>Current Unlock Ratio</div>
          <div className='text-[#00FFFF] md:text-xl text-sm font-medium'>10%</div>
        </div>
        <div className='flex md:flex-col flex-row justify-between items-center md:items-start'>
          <div className='text-[#ECF0F2] text-sm'>Price Vertified Staus</div>
          <div className='text-[#00FFFF] md:text-xl text-sm font-medium'>- -</div>
        </div>
      </div>
      <div className='flex items-center md:mt-24 mt-16 pb-[150px] overflow-x-auto'>
        <div className='flex flex-col relative justify-center items-center w-44 flex-[0_0_176px] mr-3'>
          <TokenLogoIcon width={'70px'} height={'70px'} />
          <div className='font-semibold text-center w-44 absolute bottom-[-60px] left-1/2 translate-x-[-50%]'>
            <span>$CRAZY Mint </span>
            <span className='text-[#00FFFF]'>10% Unlock immediately</span>
          </div>
        </div>
        <div className='relative flex items-center h-10 mr-4'>
          <div className='absolute text-sm text-[#B5FD14] top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]'>T0+6M</div>
          <ArrowLineIcon />
        </div>
        <div className='flex items-center justify-center bg-[#00FFFF33] relative shadow-[inset_-2px_2px_0px_0px_#DB20C1,inset_2px_-2px_0px_0px_#B5FD14] h-10 w-[140px] flex-[0_0_140px] mr-4'>
          <div className='text-[#00FFFF] font-semibold text-sm'>Price Vertified</div>
          <div className='w-[200px] absolute flex justify-center flex-col items-center bottom-[-6px] left-1/2 translate-x-[-50%] translate-y-[100%]'>
            <ArrowLine2Icon />
            <div className='font-semibold text-center'>
              <span>$CRAZY Mint More</span>
              <br />
              <span className='text-[#00FFFF]'>
                Up to 5% Unlock
                <br />
                immediately
              </span>
            </div>
          </div>
        </div>
        <div className='relative flex items-center h-10 mr-4'>
          <div className='absolute text-sm text-[#DB20C1] top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]'>T1+6M</div>
          <ArrowLineIcon fill='#DB20C1' />
        </div>
        <div className='flex items-center justify-center bg-[#00FFFF33] relative shadow-[inset_-2px_2px_0px_0px_#DB20C1,inset_2px_-2px_0px_0px_#B5FD14] h-10 w-[140px] flex-[0_0_140px] mr-4'>
          <div className='text-[#00FFFF] font-semibold text-sm'>Price Vertified</div>
          <div className='w-[200px] absolute flex justify-center flex-col items-center bottom-[-6px] left-1/2 translate-x-[-50%] translate-y-[100%]'>
            <ArrowLine2Icon />
            <div className='font-semibold text-center'>
              <span>$CRAZY Mint More</span>
              <br />
              <span className='text-[#00FFFF]'>
                Up to 5% Unlock
                <br />
                immediately
              </span>
            </div>
          </div>
        </div>
        <div className='relative flex items-center h-10 mr-4'>
          <div className='absolute text-sm text-[#00FFFF] top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]'>T2+6M</div>
          <ArrowLineIcon fill='#00FFFF' />
          <div className='absolute left-1/2 translate-x-[-50%] bottom-[-30px] translate-y-[100%]'>...</div>
        </div>
        <div className='flex items-center justify-center bg-[#00FFFF33] relative shadow-[inset_-2px_2px_0px_0px_#DB20C1,inset_2px_-2px_0px_0px_#B5FD14] h-10 w-[140px] flex-[0_0_140px]'>
          <div className='text-[#00FFFF] font-semibold text-sm'>Price Vertified</div>
          <div className='w-[200px] absolute flex justify-center flex-col items-center bottom-[-6px] left-1/2 translate-x-[-50%] translate-y-[100%]'>
            <ArrowLine2Icon />
            <div className='font-semibold text-center'>
              <span>$CRAZY Mint More</span>
              <br />
              <span className='text-[#00FFFF]'>
                Up to 5% Unlock
                <br />
                immediately
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>
        <div className='text-sm flex md:flex-row flex-col'>
          <span className='text-[#8D8E9B]'>Token Issue Time: </span>
          <span className='text-[#ECF0F2]'>-</span>
        </div>
        <div className='text-sm flex md:flex-row flex-col'>
          <span className='text-[#8D8E9B]'>Next Verification Window:</span>
          {/* on or after September 25，2025 */}
          <span className='text-[#ECF0F2]'>-</span>
        </div>
      </div>
    </div>
  )
}
