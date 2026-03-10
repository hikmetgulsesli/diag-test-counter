import { describe, it, expect } from 'vitest'
import { createCounter, increment, decrement, reset } from './counter'

describe('Counter Logic', () => {
  describe('createCounter', () => {
    it('should create counter with default initial value of 0', () => {
      const counter = createCounter()
      expect(counter.count).toBe(0)
    })

    it('should create counter with custom initial value', () => {
      const counter = createCounter(5)
      expect(counter.count).toBe(5)
    })

    it('should create counter with negative initial value', () => {
      const counter = createCounter(-10)
      expect(counter.count).toBe(-10)
    })
  })

  describe('increment', () => {
    it('should increment counter by 1', () => {
      const counter = createCounter(0)
      const result = increment(counter)
      expect(result.count).toBe(1)
    })

    it('should increment from positive number', () => {
      const counter = createCounter(5)
      const result = increment(counter)
      expect(result.count).toBe(6)
    })

    it('should increment from negative number', () => {
      const counter = createCounter(-5)
      const result = increment(counter)
      expect(result.count).toBe(-4)
    })
  })

  describe('decrement', () => {
    it('should decrement counter by 1', () => {
      const counter = createCounter(0)
      const result = decrement(counter)
      expect(result.count).toBe(-1)
    })

    it('should decrement from positive number', () => {
      const counter = createCounter(5)
      const result = decrement(counter)
      expect(result.count).toBe(4)
    })

    it('should decrement from negative number', () => {
      const counter = createCounter(-5)
      const result = decrement(counter)
      expect(result.count).toBe(-6)
    })
  })

  describe('reset', () => {
    it('should reset counter to 0 by default', () => {
      const counter = createCounter(10)
      const result = reset(counter)
      expect(result.count).toBe(0)
    })

    it('should reset counter to custom initial value', () => {
      const counter = createCounter(10)
      const result = reset(counter, 5)
      expect(result.count).toBe(5)
    })

    it('should reset from negative value to 0', () => {
      const counter = createCounter(-10)
      const result = reset(counter)
      expect(result.count).toBe(0)
    })
  })
})
