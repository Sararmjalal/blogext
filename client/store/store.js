import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './slice'

export const store = configureStore({
  reducer: {
    reduxReducer: reduxReducer,
  },
})