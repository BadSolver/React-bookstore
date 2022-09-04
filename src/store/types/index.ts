import { IBookDetails, INewBooksApi } from "../../types";

export type BookDetails = {
  book: IBookDetails;
  error: null | string;
  isLoading: boolean;
};

export type NewBooks = {
  books: INewBooksApi[];
  error: null | string;
  isLoading: boolean;
};

export type CartState = {
  isLoading: boolean;
  total: number;
  cart: IBookDetails[];
  amount: number;
};
