import dayjs from 'dayjs'
import { parseEther, parseUnits } from 'viem'

export const GrantConfig = {
  targetAmount: parseEther('300'),
  price: parseEther('0.000006'),
  maxAmount: parseEther('0.06'),
  tokenAmount: parseUnits(500_000_00n.toString(), 18),
  endTime: dayjs('2025-03-11 15:00:00').add(25, 'day').toDate().getTime(),
  transferContractAddress: '0x1f3e3C2a09aCab890a2abe73F96Ab7311fdb80A2'
} as const
    