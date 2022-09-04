import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import newBooksReducer from "./slices/newBooksSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
