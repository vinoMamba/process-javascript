/**
 * 小和问题
 */
export function smallSum(arr: number[]) {
  if (arr.length < 2)
    return 0
  return mergeSort(arr, 0, arr.length - 1)
}

export function mergeSort(arr: number[], l: number, r: number): number {
  if (l === r)
    return 0
  const mid = l + ((r - l) >> 1)
  return mergeSort(arr, l, mid)
  + mergeSort(arr, mid + 1, r)
  + merge(arr, l, mid, r)
}

function merge(arr: number[], L: number, M: number, R: number): number {
  const help = []
  let i = 0
  let p1 = L
  let p2 = M + 1
  let result = 0
  while (p1 <= M && p2 <= R) {
    result += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= M)
    help[i++] = arr[p1++]
  while (p2 <= R)
    help[i++] = arr[p2++]
  for (let j = 0; j < help.length; j++)
    arr[L + j] = help[j]

  return result
}
