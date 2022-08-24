import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { bookStoreAPI } from "../services/bookStoreApi/bookStoreApi";
import { INewBooksApi } from "../types/newBooksApi";

export const useNewBooks = () => {
  const [books, setBooks] = useState<INewBooksApi[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchBooks = async () => {
    try {
      setError("");
      setLoading(true);

      await bookStoreAPI.getNew().then((book) => {
        setBooks(book.books);
      });

      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading, error };
};
