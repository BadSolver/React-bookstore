import { BooksList } from "../../components/BooksList";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Title } from "../../components/Title/Title";
import { StyledHome } from "./style";

export const Home = () => {
  return (
    <StyledHome>
      <Title text="New Releases Books" />
      <BooksList />
      <Subscribe />
    </StyledHome>
  );
};
