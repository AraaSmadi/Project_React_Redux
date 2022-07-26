import { configureStore } from '@reduxjs/toolkit'
import login from './LoginSlice';
export const store= configureStore({
  reducer: {
    login
  }
})