import { describe, expect, it } from 'vitest'
import { selectionSort } from '../src/selectionSort'

describe('selectionSort', () => {
  it('exported', () => {
    const array = [4, 3, 2, 1, 5]
    expect(selectionSort(array)).toEqual([1, 2, 3, 4, 5])
  })
})
