export default function calculateBigIntRatio(a: bigint, b: bigint, decimalPlaces = 0) {
  const precision = BigInt(10) ** BigInt(decimalPlaces)
  const numerator = a * BigInt(100) * precision
  const result = numerator / b

  if (decimalPlaces === 0) {
    return result
  }

  const integerPart = result / precision
  const decimalPart = result % precision
  return `${integerPart}.${decimalPart.toString().padStart(decimalPlaces, '0')}`
}
