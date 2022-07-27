/**
 * 整型数组，有两种数出现了奇数次，剩下的数都出现偶数次。
 * 打印出两个奇数次的数
 */

export function printTwoOddTimesNumber(arr: number[]) {
  let eor = 0
  for (let i = 0; i < arr.length; i++)
    eor ^= arr[i]
  const rightOne = eor & (~eor + 1)
  let onlyOne = 0
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rightOne) === 0)
      onlyOne ^= arr[i]
  }
  return [onlyOne, onlyOne ^ eor]
}
