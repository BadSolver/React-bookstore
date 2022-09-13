export interface INewBooksApi {
  books: INewBooksApi[];
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
export interface IBookDetails {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: IBookFormat;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

export interface IBookFormat {
  [key: string]: string;
}

export interface NewBooksResponse {
  error: string | null;
  total: string | null;
  books: INewBooksApi[];
}
export interface SearchedBooksResponse extends NewBooksResponse {
  page: string | null;
}

export type SearchParams = {
  searchValue: string | null;
  page?: number | null;
};
