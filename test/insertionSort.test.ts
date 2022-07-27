import { describe, expect, it } from 'vitest'
import { insertionSort } from '../src/insertionSort'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [4, 3, 2, 1, 5]
    expect(insertionSort(array)).toEqual([1, 2, 3, 4, 5])
  })
})
