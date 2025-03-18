import Dialog from '../Dialog'

export default function AboutModel({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} title={'ABOUT CRAZY. FI'} onOpenChange={onOpenChange}>
      <div className='flex flex-col' translate='no'>
        <div className='text-[#00FFFF] mt-2'>
          A BSC innovative fundraising platform based on the minting and price unlocking mechanism proposed by
          <a className='underline decoration-solid ml-1' href='https://x.com/cz_binance/status/1895837657613078574' target='_blank'>
            CZ IDEA
          </a>
          .
        </div>
        <div className='text-lg font-medium text-[#ECF0F2] mt-8'>Launch Rule</div>
        <div className='text-[#00FFFF] mt-2'>
          Our platform allows anyone to launch tokens for their "crazy ideas" through a Fair-Launch mechanism. 5% of the total token supply will be
          offered via IDO on Crazy.Fi. After a successful launch, an additional 5% of the tokens, along with the corresponding BNB, will be
          automatically added to PancakeSwap's liquidity pool.
        </div>

        <div className='text-lg mt-8 font-medium text-[#ECF0F2]'>How to Participate</div>
        <div className='text-[#00FFFF] mt-2'>
          All users can invest equally in their preferred projects, with a cap on the investment amount per address (in BNB). Token allocation is
          based on the proportion of investment to the target funding. Any oversubscribed amount will be fully refunded.
        </div>
      </div>
    </Dialog>
  )
}
