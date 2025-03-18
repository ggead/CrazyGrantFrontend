import { parseUnits } from 'viem'

export function tryParseAmount(value?: string | number, decimals = 18): bigint | undefined {
  if (!value) {
    return undefined
  }

  try {
    const typedValueParsed = parseUnits(value.toString(), decimals).toString()
    if (typedValueParsed !== '0') {
      return BigInt(typedValueParsed.toString())
    }
  } catch (error) {
    console.info(`Failed to parse input amount: "${value}"`, error)
  }
  return undefined
}
