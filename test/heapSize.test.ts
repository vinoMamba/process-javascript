import { describe, expect, it } from 'vitest'
import { heapSort } from '../src/heapSort'

describe('heapSort', () => {
  it('normal', () => {
    const array = [4, 3, 2, 1, 5]
    expect(heapSort(array)).toEqual([1, 2, 3, 4, 5])
  })
})
