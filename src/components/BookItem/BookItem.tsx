import { memo } from "react";
import { Link } from "react-router-dom";
import { INewBooksApi } from "../../types/newBooksApi";
import {
  Cost,
  ItemBackground,
  StyledBookItem,
  SubTitle,
  Title,
  Image,
} from "./style";

interface IProps {
  book: INewBooksApi;
}

export const BookItem = memo(({ book }: IProps) => {
  return (
    <StyledBookItem>
      <ItemBackground>
        <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
        <Link to={`/book/${book.isbn13}`}>
          <Image src={book.image} alt={book.image} />
        </Link>
      </ItemBackground>
      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
    </StyledBookItem>
  );
});
