import { fetchDetailsBook } from "./bookDetailsSlice";
import {
  addItem,
  removeItem,
  clearCart,
  countPlus,
  countMinus,
} from "./cartSlice";
import { fetchNewBooks } from "./newBooksSlice";
import {
  removeSearchValue,
  setSearchValue,
  incrementPage,
  decrementPage,
} from "./searchSlice";
import { setUser, removeUser } from "./userSlice";

export {
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
