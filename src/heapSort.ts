export function heapSort(arr: number[]) {
  if (!arr || arr.length < 2)
    return
  for (let i = arr.length - 1; i >= 0; i--)
    heapify(arr, i, arr.length)

  let heapSize = arr.length
  swap(arr, 0, --heapSize)
  while (heapSize > 0) {
    heapify(arr, 0, heapSize)
    swap(arr, 0, --heapSize)
  }
  return arr
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapify(arr: number[], index: number, heapSize: number) {
  let left = index * 2 + 1
  while (left < heapSize) {
    let largest = (((left + 1) < heapSize) && (arr[left + 1] > arr[left])) ? left + 1 : left
    largest = arr[largest] > arr[index] ? largest : index
    if (largest === index)
      break
    swap(arr, largest, index)
    index = largest
    left = largest * 2 + 1
  }
}
