export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--)
      swap(arr, j, j + 1)
  }
  return arr
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

