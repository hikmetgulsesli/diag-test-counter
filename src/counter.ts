export interface CounterProps {
  initialValue?: number
}

export interface CounterState {
  count: number
}

export function createCounter(initialValue: number = 0): CounterState {
  return { count: initialValue }
}

export function increment(state: CounterState): CounterState {
  return { count: state.count + 1 }
}

export function decrement(state: CounterState): CounterState {
  return { count: state.count - 1 }
}

export function reset(state: CounterState, initialValue: number = 0): CounterState {
  return { count: initialValue }
}
