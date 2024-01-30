import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/CartItem";
export interface InitialState {
  cartItems: CartItemType[];
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
      const newItem: CartItemType = action.payload;
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
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total: number, item: CartItemType) =>
          total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    decrementItem(state, action) {
      const newItem: CartItemType = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity--;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== newItem.id
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price);
        }
      }
      state.totalAmount = state.cartItems.reduce(
        (total: number, item: CartItemType) =>
          total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeItem(state, action) {
      const newItem: CartItemType = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== newItem.id
        );
      }
      state.totalAmount = state.cartItems.reduce(
        (total: number, item: CartItemType) =>
          total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
