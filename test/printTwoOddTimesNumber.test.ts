import { describe, expect, it } from 'vitest'
import { printTwoOddTimesNumber } from '../src/printTwoOddTimesNumber'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 9]
    expect(printTwoOddTimesNumber(array)).toEqual([9, 3])
  })
})
