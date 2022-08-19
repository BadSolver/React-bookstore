import axios from "axios";

export class BookStoreAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKSTORE_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew(): Promise<any> {
    const { data } = await this.API.get<any>("new");
    return data;
  }
}

export const bookStoreAPI = new BookStoreAPI();
