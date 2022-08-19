import React from "react";
import { useNewBooks } from "../../hooks/useNewBooks";
import { BookItem } from "../BookItem";
import { ErrorMessage } from "../ErrorMessage";
import { Loading } from "../Loading/Loading";
import { StyledBooksList } from "./style";

export const BooksList = () => {
  const { loading, error, books } = useNewBooks();

  return (
    <StyledBooksList>
      {loading && <Loading />}
      {error && <ErrorMessage text={error} />}
      {books.map((book) => (
        <BookItem book={book} key={book.isbn13} />
      ))}
    </StyledBooksList>
  );
};
