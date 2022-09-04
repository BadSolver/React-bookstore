import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  getBookDetails,
  getCart,
  getFavorites,
  getNewBooks,
} from "./selectors";
import { fetchDetailsBook, fetchNewBooks } from "./slices";
import { removeUser, setUser } from "./slices/userSlice";
import { AppDispatch, RootState } from "./store";

export {
  removeUser,
  setUser,
  fetchDetailsBook,
  fetchNewBooks,
  getNewBooks,
  getFavorites,
  getCart,
  getBookDetails,
  useAppDispatch,
  useAppSelector,
};
export type { AppDispatch, RootState };
