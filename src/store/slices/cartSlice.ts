import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types";
import { CartState } from "../types";
import { getCartFromLocalStorage } from "../utils";

const initialState: CartState = {
  isLoading: true,
  total: 0,
  cart: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.cart.push(payload);
    },
    removeItem: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.cart = state.cart.filter((book) => book.isbn13 !== payload.isbn13);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    countPlus: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.total++;
    },
    countMinus: (state) => {
      state.total--;
    },
  },
});

export const { addItem, removeItem, clearCart, countPlus, countMinus } =
  cartSlice.actions;
export default cartSlice.reducer;
