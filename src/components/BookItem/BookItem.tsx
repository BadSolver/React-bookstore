import { memo } from "react";
import { Link } from "react-router-dom";
import { INewBooksApi } from "types";
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
  index?: number;
}

export const BookItem = memo(({ book, index }: IProps) => {
  return (
    <StyledBookItem
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Link to={`/book/${book.isbn13}`}>
        <ItemBackground whileHover={{ scale: 1.05 }}>
          <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
          <Image src={book.image} alt={book.image} />
        </ItemBackground>
      </Link>
      <Title>{book.title}</Title>
    </StyledBookItem>
  );
});
