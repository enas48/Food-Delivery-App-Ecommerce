import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './shopping-cart/cartSlice'
import cartUiSlice from './shopping-cart/cartUiSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice.reducer,
    cartUi:cartUiSlice.reducer
  },
})
