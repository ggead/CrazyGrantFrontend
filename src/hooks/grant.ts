import { useAccount, useReadContract } from 'wagmi'
import TransferABI from '../constants/abis/Transfer.json'
import { GrantConfig } from '../config/index'

export function useInvestors() {
  const { data, ...rest } = useReadContract({
    abi: TransferABI,
    address: GrantConfig.transferContractAddress,
    functionName: 'investors'
  })

  return {
    ...rest,
    data: data as bigint | undefined
  }
}

export function useTotalInvest() {
  const { data, ...rest } = useReadContract({
    abi: TransferABI,
    address: GrantConfig.transferContractAddress,
    functionName: 'totalInvest'
  })

  return {
    ...rest,
    data: data as bigint | undefined
  }
}

export function useUserInvest() {
  const { address } = useAccount()

  const { data, ...rest } = useReadContract({
    abi: TransferABI,
    address: GrantConfig.transferContractAddress,
    functionName: 'getUserInfo',
    args: [address]
  })

  return {
    ...rest,
    data: data as { amount: bigint; latestTransfer: bigint } | undefined
  }
}
