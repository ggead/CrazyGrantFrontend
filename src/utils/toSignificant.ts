import _Decimal from 'decimal.js-light'
import toFormat from 'toformat'
import isUndefined from './isUndefined'

export enum Rounding {
  ROUND_DOWN = 0,
  ROUND_HALF_UP = 1,
  ROUND_UP = 2
}

const Decimal = toFormat(_Decimal)

const toSignificantRounding = {
  [Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [Rounding.ROUND_UP]: Decimal.ROUND_UP
}

export default function toSignificant(
  value: bigint | string | number | undefined,
  decimals: number | undefined,
  significantDigits = 4,
  format: object = { groupSeparator: ',' },
  rounding: Rounding = Rounding.ROUND_HALF_UP
): string | undefined {
  if (isUndefined(value) || isUndefined(decimals)) return undefined

  Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] })
  const quotient = new Decimal(value.toString()).div((BigInt(10) ** BigInt(decimals)).toString()).toSignificantDigits(significantDigits)

  return quotient.toFormat(quotient.decimalPlaces(), format)
}
