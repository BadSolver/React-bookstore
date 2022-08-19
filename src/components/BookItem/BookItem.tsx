import { INewBooksApi } from "../../types/newBooksApi";
import { Cost, ItemBackground, StyledBookItem, SubTitle, Title } from "./style";

interface IProps {
  book: INewBooksApi;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <ItemBackground>
        <img src={book.image} alt={book.image} />
      </ItemBackground>

      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
      <Cost>{book.price}</Cost>
    </StyledBookItem>
  );
};
