export function bubbleSort(arr: number[]) {
  for (let e = arr.length; e > 0; e--) {
    for (let i = 0; i < e; i++) {
      if (arr[i] > arr[i + 1])
        swap(arr, i, i + 1)
    }
  }
  return arr
}
function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
