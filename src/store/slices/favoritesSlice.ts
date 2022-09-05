import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../types";
import { FavoritesState } from "../types";
import { getFavoritesFromLocalStorage } from "../utils";

const initialState: FavoritesState = {
  item: getFavoritesFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemFavorites: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.item.push(payload);
    },
    removeItemFavorites: (state, { payload }: PayloadAction<IBookDetails>) => {
      state.item = state.item.filter((book) => book.isbn13 !== payload.isbn13);
    },
    clearFavorites: (state) => {
      state.item = [];
    },
  },
});

export const { addItemFavorites, removeItemFavorites, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
