import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { BooksList } from "../../components/BooksList";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Title } from "../../components/Title/Title";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { INewBooksApi } from "../../types";
import { StyledHome } from "./style";

export const Home = () => {

  const [books, setBooks] = useState<INewBooksApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchBooks = async () => {
    try {
      setError("");
      setIsLoading(true);

      await bookStoreAPI.getNew().then((book) => {
        setBooks(book.books);
      });

      setIsLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  };
  
  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <StyledHome>
      <Title text="New Releases Books" />
      <BooksList isLoading={isLoading} error={error} books={books}/>
      <Subscribe />
    </StyledHome>
  );
};
