import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import { INewBooksApi } from "../../types";
import { BookItem } from "../BookItem";
import { ErrorMessage } from "../ErrorMessage";
import { StyledBooksList } from "./style";

interface IProps {
  isLoading: boolean;
  error: string | null;
  books: INewBooksApi[];
}

const override: CSSProperties = {
  display: "block",
  margin: "100px auto 0 auto",
};

export const BooksList = ({ isLoading, error, books }: IProps) => {

  return (
    <>
      {isLoading && <ClipLoader cssOverride={override} size={50} />}
      <StyledBooksList>
        {error && <ErrorMessage text={error} />}
        {books.map((book) => {
          return <BookItem book={book} key={book.isbn13} />;
        })}
      </StyledBooksList>
    </>
  );
};
