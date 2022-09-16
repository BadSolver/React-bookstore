import { Loader } from "components";
import { INewBooksApi } from "types";
import { BookItem } from "../BookItem";
import { ErrorMessage } from "../ErrorMessage";
import { StyledBooksList } from "./style";

interface IProps {
  isLoading: boolean;
  error: string | null;
  books: INewBooksApi[];
}

export const BooksList = ({ isLoading, error, books }: IProps) => {
  return (
    <>
      {isLoading && <Loader size={"50"} />}
      <StyledBooksList>
        {error && <ErrorMessage text={error} />}
        {books.map((book) => {
          return <BookItem book={book} key={book.isbn13} />;
        })}
      </StyledBooksList>
    </>
  );
};
