import { Link } from "react-router-dom";
import { INewBooksApi } from "../../types/newBooksApi";
import { Raiting } from "../Raiting";
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

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <ItemBackground>
      <Cost>{book.price}</Cost>
        <Link
          to={`/book/${book.isbn13}`}
        >
          <Image src={book.image} alt={book.image} />
        </Link>
      </ItemBackground>
      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>      
    </StyledBookItem>
  );
};
