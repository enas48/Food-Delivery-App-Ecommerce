import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './shopping-cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice.reducers
  },
})
