import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  getBookDetails,
  getCart,
  getFavorites,
  getNewBooks,
} from "./selectors";
import { getUserInfo } from "./selectors/getUserInfo";
import {
  addItem,
  clearCart,
  countMinus,
  countPlus,
  decrementPage,
  fetchDetailsBook,
  fetchNewBooks,
  incrementPage,
  removeItem,
  removeSearchValue,
  setSearchValue,
} from "./slices";
import { removeUser, setUser } from "./slices/userSlice";
import { AppDispatch, RootState } from "./store";

export {
  getNewBooks,
  getFavorites,
  getCart,
  getBookDetails,
  useAppDispatch,
  useAppSelector,
  getUserInfo,
  fetchDetailsBook,
  fetchNewBooks,
  addItem,
  removeItem,
  clearCart,
  countPlus,
  countMinus,
  removeSearchValue,
  setSearchValue,
  incrementPage,
  decrementPage,
  setUser,
  removeUser,
};
export type { AppDispatch, RootState };
