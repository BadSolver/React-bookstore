import { useEffect } from "react";
import { BooksList, Subscribe, Title } from "components";
import {
  fetchNewBooks,
  getNewBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledHome } from "./style";

export const Home = () => {
  const { error, isLoading, books } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledHome>
      <Title text="New Releases Books" />
      <BooksList isLoading={isLoading} error={error} books={books} />
      <Subscribe />
    </StyledHome>
  );
};
