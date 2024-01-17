import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/CartItem";
export interface InitialState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: InitialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem: CartItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          imageUrl: newItem.imageUrl,
          quantity: 1,
          totalPrice: newItem.totalPrice,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      // state.totalAmount = state.cartItems.reduce(
      //   (total, item) => total + Number(item.price) * Number(item.quantity)
      // );
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice

