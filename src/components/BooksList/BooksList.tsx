import { useNewBooks } from "../../hooks";
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
       
      </StyledBooksList>
  );
};
