import { describe, expect, it } from 'vitest'
import { bubbleSort } from '../src/bubbleSort'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [4, 3, 2, 1, 5]
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5])
  })
  it('empty', () => {
    const array: number[] = []
    expect(bubbleSort(array)).toEqual([])
  })
})
