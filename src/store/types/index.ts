import { IBookDetails, INewBooksApi } from "../../types";

export type BookDetails = {
  book: IBookDetails;
  error: null | string;
  isLoading: boolean;
  amount: number | null;
};

export type NewBooks = {
  books: INewBooksApi[];
  error: null | string;
  isLoading: boolean;
};

export type CartState = {
  isLoading: boolean;
  amount: {
    [key: string]: number;
  };
  cart: IBookDetails[];
};

export type FavoritesState = {
  item: IBookDetails[];
};
