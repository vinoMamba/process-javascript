export function mergeSort(arr: number[], l: number, r: number) {
  if (l === r)
    return
  const mid = l + ((r - l) >> 1)
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

function merge(arr: number[], l: number, m: number, r: number) {
  const help = []
  let i = 0
  let p1 = l
  let p2 = m + 1
  while (p1 <= m && p2 <= r)
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  while (p1 <= m)
    help[i++] = arr[p1++]
  while (p2 <= r)
    help[i++] = arr[p2++]
  for (let j = 0; j < help.length; j++)
    arr[l + j] = help[j]
}
