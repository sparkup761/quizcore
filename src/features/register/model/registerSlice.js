import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  agree: true,
  status: 'idle',
  error: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload
    },
    setPassword(state, action) {
      state.password = action.payload
    },
    setAgree(state, action) {
      state.agree = action.payload
    },
    submitStart(state) {
      state.status = 'loading'
      state.error = null
    },
    submitSuccess(state) {
      state.status = 'success'
    },
    submitError(state, action) {
      state.status = 'error'
      state.error = action.payload ?? 'Unknown error'
    },
    reset(state) {
      Object.assign(state, initialState)
    },
  },
})

export const {
  setEmail,
  setPassword,
  setAgree,
  submitStart,
  submitSuccess,
  submitError,
  reset,
} = registerSlice.actions

export const registerReducer = registerSlice.reducer

