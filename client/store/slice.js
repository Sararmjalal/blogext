import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: null
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    removeCurrent: (state) => {
      (new Cookies()).remove('token', { path: "/" })
      state.current = null
    }
  },
})

export const { setCurrent, removeCurrent } = userSlice.actions
export const selectUser = state => state.userReducer.current
export default userSlice.reducer