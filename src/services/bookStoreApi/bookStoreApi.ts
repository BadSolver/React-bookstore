import axios from "axios";
import { IBookDetails, INewBooksApi, SearchedBooksResponse } from "types";

enum BookEndpoint {
  NEW = "new",
  SEARCH = "search/",
  BOOKS = "books/",
}

export class BookStoreAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKSTORE_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew() {
    const { data } = await this.API.get<INewBooksApi>(BookEndpoint.NEW);
    return data.books;
  }

  public async getDetails(isbn: string | undefined) {
    const { data } = await this.API.get<IBookDetails>(
      `${BookEndpoint.BOOKS}/${isbn}`
    );
    return data;
  }

  public async getSearch(query: string | null, page: number | null = 1) {
    const { data } = await this.API.get<SearchedBooksResponse>(
      `${BookEndpoint.SEARCH}/${query}/${page}`
    );
    return data;
  }
}

export const bookStoreAPI = new BookStoreAPI();
