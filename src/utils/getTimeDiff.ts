function padStart(number: number) {
  if (number.toString().length > 1) {
    return number.toString()
  }

  return number.toString().padStart(1, '0')
}

const secondTimestamp = 1000
const minuteTimestamp = 60 * secondTimestamp
const hourTimestamp = 60 * minuteTimestamp
const dayTimestamp = 24 * hourTimestamp

export default function getTimeDiff(startTime: number, endTime: number) {
  if (endTime < startTime) return { day: padStart(0), hour: padStart(0), minute: padStart(0), second: padStart(0) }

  const day = ~~((endTime - startTime) / dayTimestamp)
  const dayRemainder = (endTime - startTime) / dayTimestamp - day

  const hour = ~~((dayTimestamp * dayRemainder) / hourTimestamp)
  const hourRemainder = (dayTimestamp * dayRemainder) / hourTimestamp - hour

  const minute = ~~((hourTimestamp * hourRemainder) / minuteTimestamp)
  const minuteRemainder = (hourTimestamp * hourRemainder) / minuteTimestamp - minute

  const second = ~~((minuteTimestamp * minuteRemainder) / secondTimestamp)

  return {
    day,
    hour,
    minute,
    second
  }
}
