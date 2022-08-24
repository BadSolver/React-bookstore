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

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <ItemBackground>
        <Link
          to={`/book/${book.title}`}
        >
          <Image src={book.image} alt={book.image} />
        </Link>
      </ItemBackground>
      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
      <Cost>{book.price}</Cost>
    </StyledBookItem>
  );
};
