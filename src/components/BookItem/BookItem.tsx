import { INewBooksApi } from "../../types";
import { Cost, ItemBackground, StyledBookItem, SubTitle, Title, Image } from "./style";

interface IProps {
  book: INewBooksApi;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <ItemBackground>
        <Image src={book.image} alt={book.image} />
      </ItemBackground>
      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
      <Cost>{book.price}</Cost>
    </StyledBookItem>
  );
};