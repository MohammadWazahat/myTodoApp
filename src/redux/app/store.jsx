import { configureStore } from '@reduxjs/toolkit'
import secondSlice from '../features/secondSlice/secondSlice'
import firstSlice from '../features/firstSlice/firstSlice'

export const store = configureStore({
    
  reducer: {
    storeSliceOne : firstSlice ,
    storeSliceTwo : secondSlice ,
  },
})