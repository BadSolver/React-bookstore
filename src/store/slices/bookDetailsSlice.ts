import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { IBookDetails } from "../../types";
import { BookDetails } from "../types";
import { isPendingAction, isRejectedAction } from "../utils";

const initialState: BookDetails = {
  book: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
  error: null,
  isLoading: false,
};

export const fetchDetailsBook = createAsyncThunk<
  IBookDetails,
  string,
  { rejectValue: string }
>("bookDetails/fetchDetailsBook", async (isbn: string, { rejectWithValue }) => {
  try {
    const response = await bookStoreAPI.getDetails(isbn);
    return response;
  } catch {
    return rejectWithValue("error");
  }
});

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchDetailsBook.fulfilled,
      (state, { payload }: PayloadAction<IBookDetails>) => {
        state.isLoading = false;
        state.book = payload;
      }
    );
    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(
      isRejectedAction,
      (state, { payload }: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
  },
});

export default bookDetailsSlice.reducer;
