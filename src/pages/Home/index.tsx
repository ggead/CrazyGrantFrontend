import { formatEther } from 'viem'
import { ArrowIcon, TokenLogoIcon } from '../../components/Svg'
import { GrantConfig } from '../../config'
import Progress from '../../components/Progress'
import Input from '../../components/NumericalInput'
import { useMemo, useState } from 'react'
import Button from '../../components/Button'
import { useInvestors, useTotalInvest, useUserInvest } from '../../hooks/grant'
import getTimeDiff from '../../utils/getTimeDiff'
import useInterval from 'ahooks/lib/useInterval'
import { useAccount, useBalance, useWriteContract } from 'wagmi'
import { tryParseAmount } from '../../utils/tryParseAmount'
import ConnectButton from '../../components/ConnectButton'
import TransferABI from '../../constants/abis/Transfer.json'
import config from '../../config/wagmi'
import { waitForTransactionReceipt } from 'wagmi/actions'
import isRejectedError from '../../utils/isRejectedError'
import ErrorCard from '../../components/ErrorCard'
import SuccessCard from '../../components/SuccessCard'
import calculateBigIntRatio from '../../utils/calculateBigIntRatio'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import toSignificant from '../../utils/toSignificant'

const labels: {
  [k: number]: string
} = {
  [1]: `T0+6M && Price verified,mint 5% `,
  [2]: `T0+6M && Price verified,mint 5% `,
  [17]: `T17+6M && Price verified,mint 5% `,
  [18]: `T18+6M && Price verified,mint 5% `
}
const times = Array.from({ length: 18 }, (_, i) => i + 1)

export default function Home() {
  const [showSuccessCard, setShowSuccessCard] = useState(false)
  const [investAmount, setInvestAmount] = useState('')
  const [countdown, setCountdown] = useState(getTimeDiff(Date.now(), GrantConfig.endTime))
  // const [investResult, setInvestResult] = useState<{ hash: string; amount: bigint }>()
  const [failed, setFailed] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { address } = useAccount()
  const navigate = useNavigate()

  const { data: investors } = useInvestors()
  const { data: totalInvest } = useTotalInvest()
  const { data: userInvest, refetch } = useUserInvest()
  const { data: balance } = useBalance({
    address: address
  })
  const { writeContractAsync } = useWriteContract()

  const percent = useMemo(() => {
    if (totalInvest === undefined) return undefined

    const _percent = calculateBigIntRatio(totalInvest, GrantConfig.targetAmount, 3)

    return _percent ? parseFloat(_percent.toString()) : 0
  }, [totalInvest])

  const parsedInvestAmount = useMemo(() => tryParseAmount(investAmount), [investAmount])

  const isInsufficientBalance = useMemo(() => {
    if (!balance || !parsedInvestAmount) return false
    return balance.value < parsedInvestAmount
  }, [balance, parsedInvestAmount])

  const error = useMemo(() => {
    if (investAmount && parsedInvestAmount === undefined) {
      return 'Enter an amount'
    }

    if (isInsufficientBalance) {
      return 'Insufficient Balance'
    }

    if (parsedInvestAmount && userInvest?.amount === 0n && parsedInvestAmount > GrantConfig.maxAmount) {
      return `The maximum invest amount is ${formatEther(GrantConfig.maxAmount)} BNB`
    }

    if (parsedInvestAmount && userInvest) {
      if (userInvest.amount === GrantConfig.maxAmount) {
        return `The maximum invest amount is ${formatEther(GrantConfig.maxAmount)} BNB`
      }
      if (parsedInvestAmount + userInvest.amount > GrantConfig.maxAmount) {
        return `The maximum invest amount is ${formatEther(GrantConfig.maxAmount - userInvest.amount)} BNB`
      }
    }

    if (totalInvest && totalInvest >= GrantConfig.targetAmount) {
      return 'The grant has ended'
    }

    if (dayjs(Date.now()).isAfter(GrantConfig.endTime)) {
      return 'The grant has ended'
    }

    return undefined
  }, [investAmount, isInsufficientBalance, parsedInvestAmount, totalInvest, userInvest])

  const onInvest = async () => {
    if (!address || !parsedInvestAmount) return

    setIsLoading(true)
    try {
      const hash = await writeContractAsync({
        abi: TransferABI,
        address: GrantConfig.transferContractAddress,
        account: address,
        functionName: 'invest',
        args: [],
        value: parsedInvestAmount
      })

      await waitForTransactionReceipt(config, { hash: hash })

      // setInvestResult({ hash, amount: parsedInvestAmount })
      setShowSuccessCard(true)
      setInvestAmount('')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (!isRejectedError(error)) {
        setFailed(true)
      }
    } finally {
      refetch()
      setIsLoading(false)
    }
  }

  useInterval(() => {
    setCountdown(getTimeDiff(Date.now(), GrantConfig.endTime))
  }, 1000)

  return (
    <div className='shadow-[inset_4px_4px_0_0_#FFE43D,inset_-4px_-4px_0_0_#FF2CD3,4px_4px_0_0_#00FFFF] md:w-[940px] md:mt-11 mt-10 md:mx-auto mx-3 md:p-6 p-3 bg-black'>
      <div className='shadow-[inset_-2px_2px_0_0_#FFE43D,inset_2px_-2px_0_0_#00FFFF] md:h-13 bg-[#00FFFF33] flex justify-between items-center md:px-4 px-3 md:py-0 py-3'>
        <div className='flex md:flex-row flex-col md:items-center text-[#00FFFF] font-semibold'>
          <div className='md:text-sm text-xs'>Token Name:</div>
          <div className='md:text-lg text-base md:ml-2'>CRAZY</div>
        </div>
        <div className='flex md:flex-row flex-col md:items-center items-end text-[#00FFFF] font-semibold'>
          <div className='md:text-sm text-xs'>Total Supply: </div>
          <div className='md:text-lg text-base md:ml-2'>1,000,000,000</div>
        </div>
      </div>

      <div className='flex justify-between mt-3'>
        <div className='font-semibold'>Tokenomics</div>
        <div
          className='text-sm text-[#FFE43D] cursor-pointer'
          onClick={() => {
            navigate('/CrazyGrantDetails')
          }}>
          More details -{'>'}
        </div>
      </div>

      <div className='flex items-center h-[140px] overflow-x-scroll'>
        <div className='flex justify-center items-center relative flex-[0_0_80px] w-20 h-6 bg-[#00FFFF]'>
          <div className='text-[#000] font-semibold'>T0</div>
          <div className='flex justify-center items-center flex-col absolute left-1/2 translate-x-[-50%] top-[-100%] translate-y-[-50%]'>
            <div className='text-sm font-semibold text-nowrap w-15'>TGE 10%</div>
            <ArrowIcon />
          </div>
        </div>
        <div className='relative flex items-center'>
          <div className='absolute left-1/2 translate-x-[-50%] top-[-100%] translate-y-[-50%] text-[#8D8E9B]'>...</div>
          <div className='absolute left-1/2 translate-x-[-50%] bottom-[-100%] translate-y-[50%] text-[#8D8E9B]'>...</div>
          {times.map(item => {
            const label = labels[item]
            const isInTop = item % 2 === 0
            const color = item > 2 ? '#00FFFF' : '#FFE43D'

            return (
              <div
                key={item}
                className='flex justify-center relative items-center w-11 h-6 border-r border-solid border-[#3F4151] last:border-r-0 bg-[#181920]'>
                <div className='text-[#8D8E9B] text-sm'> T{item}</div>
                {label ? (
                  <div
                    className={`flex justify-center items-center flex-col absolute left-1/2 translate-x-[-50%] ${
                      isInTop ? 'top-[-100%] translate-y-[-67%]' : 'bottom-[-100%] translate-y-[67%]'
                    }`}>
                    {!isInTop ? <ArrowIcon fill={color} direction={'top'} /> : null}
                    <div className={`text-xs text-center font-semibold w-[120px] text-[${color}]`}>{label}</div>
                    {isInTop ? <ArrowIcon fill={color} /> : null}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>

      <div className='border-[#00FFFF] border-[2px] border-solid md:p-6 py-4 px-3 mt-2 md:w-[560px] mx-auto'>
        <div className='flex md:flex-row flex-col md:items-center md:justify-between'>
          <div className='flex md:items-start items-center md:flex-col flex-row md:justify-normal justify-between gap-1'>
            <div className='text-xs text-[#8D8E9B]'>Target Raise</div>
            <div className='md:text-lg text-sm font-semibold'>{formatEther(GrantConfig.targetAmount)} BNB</div>
          </div>
          <div className='flex md:items-start items-center md:flex-col flex-row md:justify-normal justify-between gap-1'>
            <div className='text-xs text-[#8D8E9B]'>Token Price</div>
            <div className='md:text-lg text-sm font-semibold'>{formatEther(GrantConfig.price)} BNB</div>
          </div>
          <div className='flex md:items-start items-center md:flex-col flex-row md:justify-normal justify-between gap-1'>
            <div className='text-xs text-[#8D8E9B]'>Sale Amount</div>
            <div className='md:text-lg text-sm font-semibold'>{toSignificant(GrantConfig.tokenAmount, 18)}</div>
          </div>
          <div className='flex md:items-start items-center md:flex-col flex-row md:justify-normal justify-between gap-1'>
            <div className='text-xs text-[#8D8E9B]'>Investors</div>
            <div className='md:text-lg text-sm font-semibold'>{investors ?? '-'}</div>
          </div>
        </div>

        <div className='flex flex-col md:mt-4'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='text-xs text-[#8D8E9B]'>Progress: </div>
              <div className='text-[#00FFFF] ml-2'>
                <span className='text-xs md:text-base font-semibold'>{percent}%</span>
                {/* <span className='text-xs ml-1'>(up to 500%)</span> */}
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-xs text-[#8D8E9B]'>Ends in: </span>
              <span className='text-xs md:text-base text-[#00FFFF] ml-2'>
                {countdown.day}D:{countdown.hour}H:{countdown.minute}M:{countdown.second}S
              </span>
            </div>
          </div>
          <div className='mt-2'>
            <Progress percent={percent} />
          </div>
        </div>
        <div className='md:mt-4 mt-2'>
          <div className='text-sm font-semibold'>Invest Amount</div>
          <div className='flex md:flex-row flex-col mt-3'>
            <div className='flex flex-auto items-center bg-white h-12 px-3'>
              <Input
                className='h-12 text-black'
                value={investAmount}
                placeholder={`Up to ${formatEther(GrantConfig.maxAmount)} BNB`}
                onUserInput={setInvestAmount}
              />
              <span className='font-semibold text-black'>BNB</span>
            </div>
            <div className='md:ml-3 mt-4 md:mt-0'>
              {!address ? (
                <ConnectButton className='md:w-36 w-full' />
              ) : (
                <Button className='md:w-36 w-full' loading={isLoading} disabled={!!error || !parsedInvestAmount} onClick={onInvest}>
                  Submit
                </Button>
              )}
            </div>
          </div>
          <ErrorCard error={error} visible={error ? true : false} />
          <ErrorCard autoHide error={'Submit Failed'} visible={failed} onChange={setFailed} />
          <SuccessCard tips={'Successfully Submitted'} visible={showSuccessCard} onChange={setShowSuccessCard} />
        </div>
      </div>

      {userInvest && userInvest.amount > 0 ? (
        <div className='bg-[#181921] mt-3 p-6 md:w-[560px] mx-auto'>
          <div className='flex items-center'>
            <TokenLogoIcon className='flex-[0_0_40px]' />
            <div className='ml-3'>
              <div className='text-xs text-[#8D8E9B]'>My Allocation</div>
              <div className='text-sm text-[#ECF0F2]'>Being calculated and will be determined after launch.</div>
            </div>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='text-xs text-[#8D8E9B]'>Invested Funds</div>
            <div className='text-xs text-right'>{userInvest ? formatEther(userInvest.amount) : '-'} BNB</div>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-[#8D8E9B]'>Token Receipt</div>
            <div className='text-xs text-right'>In Progress</div>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-[#8D8E9B]'>PancakeSwap Trading Open Time</div>
            <div className='text-xs text-right'>In Progress</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
