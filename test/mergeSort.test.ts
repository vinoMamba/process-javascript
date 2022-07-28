import { describe, expect, it } from 'vitest'
import { mergeSort } from '../src/mergeSort'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [2, 1, 4, 3, 6, 5]
    mergeSort(array, 0, array.length - 1)
    expect(array).toEqual([1, 2, 3, 4, 5, 6])
  })
})
