import { describe, expect, it } from 'vitest'
import { smallSum } from '../src/smallSum'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [1, 3, 4, 2, 5]
    const result = smallSum(array)
    expect(array).toEqual([1, 2, 3, 4, 5])
    expect(result).toEqual(16)
  })
})
