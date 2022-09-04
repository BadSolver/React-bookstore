import { useEffect } from "react";
import { BooksList } from "../../components/BooksList";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Title } from "../../components/Title/Title";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/redux-hooks/redux-hooks";
import { getNewBooks } from "../../store/selectors";
import { fetchNewBooks } from "../../store/slices/newBooksSlice";
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
