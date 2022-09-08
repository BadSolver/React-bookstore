import { RootState } from "../../store";

export const getNewBooks = (state: RootState) =>
  state.persistedReducer.newBooks;
