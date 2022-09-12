import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types";
import { CartState } from "../types";

const initialState: CartState = {
  isLoading: true,
  amount: {},
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<IBookDetails>) => {
      const findItem = state.cart.find(
        (cart) => cart.isbn13 === payload.isbn13
      );
      if (!findItem) {
        state.cart.push(payload);
      }
      state.amount = {
        ...state.amount,
        [payload.isbn13]: (state.amount[payload.isbn13] || 0) + 1,
      };
    },
    removeItem: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.cart = state.cart.filter((book) => book.isbn13 !== payload.isbn13);
      state.amount = {
        ...state.amount,
        [payload.isbn13]: (state.amount[payload.isbn13] || 1) - 1,
      };
    },
    clearCart: (state) => {
      state.cart = [];
      state.amount = {};
    },
    countPlus: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.amount = {
        ...state.amount,
        [payload.isbn13]: (state.amount[payload.isbn13] || 0) + 1,
      };
    },
    countMinus: (state, { payload }) => {
      state.amount = {
        ...state.amount,
        [payload.isbn13]: (state.amount[payload.isbn13] || 1) - 1,
      };
    },
  },
});

export const { addItem, removeItem, clearCart, countPlus, countMinus } =
  cartSlice.actions;
export default cartSlice.reducer;
