import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { INewBooksApi } from "../../types";
import { NewBooks } from "../types";
import { isPendingAction, isRejectedAction } from "../utils";

const initialState: NewBooks = {
  books: [],
  error: null,
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<
  INewBooksApi[],
  undefined,
  { rejectValue: string }
>("newBooks/fetchNewBooks", async (_, { rejectWithValue }) => {
  try {
    const response = await bookStoreAPI.getNew();
    return response.books;
  } catch (error) {
    return rejectWithValue("error");
  }
});

export const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchNewBooks.fulfilled,
      (state, { payload }: PayloadAction<INewBooksApi[]>) => {
        state.isLoading = false;
        state.books = payload;
      }
    );
    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(isRejectedAction, (state) => {
      state.isLoading = false;
      state.error = "payload";
    });
  },
});

export default newBooksSlice.reducer;
