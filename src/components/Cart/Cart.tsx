import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, useAppDispatch, useAppSelector } from "../../store";
import {
  countPlus,
  countMinus,
  removeItem,
} from "../../store/slices/cartSlice";
import { IBookDetails } from "../../types";
import {
  Button,
  ButtonCount,
  Container,
  ContainerTitle,
  Cost,
  CostContainer,
  Count,
  CountContainer,
  Images,
  StyledCart,
  Subtitel,
  Title,
} from "./style";

interface IProps {
  book: IBookDetails;
}

export const Cart = memo(({ book }: IProps) => {
  const { total } = useAppSelector(getCart);
  const [cost, setCost] = useState(0);

  const dispatch = useAppDispatch();

  const handleCountPlus = () => {
    dispatch(countPlus(book));
    setCost(total * Math.round(Number(book.price.slice(1))));
  };
  const handleCountMinus = () => {
    dispatch(countMinus());
  };

  const handleDeleteBook = () => {
    dispatch(removeItem(book));
  };

 
  return (
    <>
      <StyledCart>
        <Container>
          <Link to={`/book/${book.isbn13}`}>
            <Images src={book.image} alt={book.image} />
          </Link>
          <ContainerTitle>
            <Title>{book.title}</Title>
            <Subtitel>{book.authors}</Subtitel>
          </ContainerTitle>
        </Container>
        <CountContainer>
          <ButtonCount onClick={handleCountMinus}>-</ButtonCount>
          <Count>
            <Subtitel>{total}</Subtitel>
          </Count>
          <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
        </CountContainer>
        <CostContainer>
          <Cost> {book.price === "$0.00" ? "free" : cost} $</Cost>
        </CostContainer>
        <Button onClick={handleDeleteBook}>✖</Button>
      </StyledCart>
    </>
  );
});
