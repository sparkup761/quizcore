import { configureStore } from '@reduxjs/toolkit'
import { registerReducer } from '@/features/register/model/registerSlice'

export function createAppStore() {
  return configureStore({
    reducer: {
      register: registerReducer,
    },
  })
}

