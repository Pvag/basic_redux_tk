import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, resetCounter } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value by 10"
          onClick={() => dispatch(incrementByAmount({value: 10, name: 'WoW!'}))}
        >
          Increment 10
        </button>
        <button
        aria-label='Reset counter to initial value'
        onClick={() => dispatch(resetCounter())}
        >
          Reset Counter
        </button>
      </div>
    </div>
  )
}