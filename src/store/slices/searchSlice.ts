import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookStoreAPI } from "services/bookStoreApi/bookStoreApi";
import { SearchedBooksResponse, SearchParams } from "types";
import { isPendingAction, isRejectedAction } from "../utils";

type SearchState = {
  searchParams: SearchParams;
  searchResponse: SearchedBooksResponse;
  error: string | null;
  isLoading: boolean;
};

const initialState: SearchState = {
  searchParams: {
    searchValue: null,
    page: null,
  },
  searchResponse: {
    error: null,
    total: null,
    page: null,
    books: [],
  },
  error: null,
  isLoading: false,
};

export const fetchSearchedBooks = createAsyncThunk<
  SearchedBooksResponse,
  SearchParams,
  { rejectValue: string }
>(
  "search/fetchSearchedBooks",
  async (searchParams: SearchParams, { rejectWithValue }) => {
    try {
      return await bookStoreAPI.getSearch(
        searchParams.searchValue,
        searchParams.page
      );
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchParams.searchValue = payload.searchValue;
      state.searchParams.page = payload.page;
    },
    removeSearchValue: (state) => {
      state.searchParams.searchValue = null;
      state.searchParams.page = null;
    },
    incrementPage: (state, { payload }) => {
      state.searchParams.page = payload;
    },
    decrementPage: (state, { payload }) => {
      state.searchParams.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchedBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.searchResponse.books = payload.books;
      state.searchResponse.error = payload.page;
      state.searchResponse.page = payload.page;
      state.searchResponse.total = payload.total;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default searchSlice.reducer;

export const {
  removeSearchValue,
  setSearchValue,
  incrementPage,
  decrementPage,
} = searchSlice.actions;
