import { describe, expect, it } from 'vitest'
import { printOddTimesNumber } from '../src/printOddTimesNumber'

describe('selectionSort', () => {
  it('normal', () => {
    const array = [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5]
    expect(printOddTimesNumber(array)).toEqual(3)
  })
})
