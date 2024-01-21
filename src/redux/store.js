import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slides/counterSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
})