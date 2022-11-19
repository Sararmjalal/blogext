import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

export const reduxSlice = createSlice({
  name: 'user',
  initialState: {
    current: null
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.current = action.payload
    },
    removeCurrentUser: (state) => {
      (new Cookies()).remove('token', { path: "/" })
      state.current = null
    }
  },
})

export const { setCurrentUser, removeCurrentUser } = reduxSlice.actions
export const selectUser = state => state.reduxReducer.current
export default reduxSlice.reducer