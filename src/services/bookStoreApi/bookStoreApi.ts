class BookStore {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKSTORE_API as string
}

export const bookStore = new BookStore();