import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  name: string,
  value: number
}

const initialState: CounterState = {
  name: '',
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Payload can be an object
    incrementByAmount: (state, action: PayloadAction<CounterState>) => {
      console.log('name:', action.payload.name);
      
      state.name += action.payload.name
      state.value += action.payload.value
    },
    resetCounter: (state) => {
      state.value = initialState.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { decrement, increment, incrementByAmount, resetCounter } = counterSlice.actions

export default counterSlice.reducer