// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isRejectedError(error: any) {
  if ((error.toString() as string).includes('User rejected the request.')) return true
  if ((error.toString() as string).includes('User rejected the transaction!')) return true

  return false
}
