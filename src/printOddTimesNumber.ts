/**
 * 整型数组，只有一种数出现了奇数次，剩下的数都出现偶数次。
 * 打印出出现奇数次的数
 */

export function printOddTimesNumber(arr: number[]) {
  let eor = 0
  for (let i = 0; i < arr.length; i++)
    eor ^= arr[i]

  return eor
}
