import axios from "axios";

class BookStore {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKSTORE_API as string
    private readonly api = axios.create({
        baseURL: this.BASE_URL
    });

        public async getAll() {

        }
}

export const bookStore = new BookStore();