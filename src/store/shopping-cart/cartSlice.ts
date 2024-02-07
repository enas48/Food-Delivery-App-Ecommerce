import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/CartItem";
export interface InitialState {
  cartItems: CartItemType[];
  totalQuantity: number;
  totalAmount: number;
}

const items: [] =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [];
const totalAmount: number =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount") as string)
    : 0;
const totalQuantity: number =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity") as string)
    : 0;
const setItemFunc = (
  item: CartItemType[],
  totalAmount: number,
  totalQuantity: number
) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};
const initialState: InitialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
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
    
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
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
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
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
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
