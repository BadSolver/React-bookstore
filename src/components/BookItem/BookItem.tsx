import { INewBooksApi } from "../../types/newBooksApi";
import { StyledBookItem } from "./style";

interface IProps {
  book: INewBooksApi;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <img src={book.image} alt={book.image} />
      <h3>{book.title}</h3>
      <p>{book.subtitle}</p>
      <p>{book.price}</p>
    </StyledBookItem>
  );
};
