import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/redux-hooks/redux-hooks";
import { getCart } from "../../store/selectors/cartSelector";
import {
  countMinus,
  countPlus,
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
  StyledCart,
  Subtitel,
  Title,
} from "./style";

interface IProps {
  book: IBookDetails;
}

export const Cart = ({ book }: IProps) => {
  const { total } = useAppSelector(getCart);
  const [cost, setCost] = useState(0);

  const dispatch = useAppDispatch();

  const handleCountPlus = () => {
    dispatch(countPlus(book));
    setCost(total * Number(book.price.slice(1)));
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
          <img src={book.image} alt={book.image} />
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
          <Cost> {book.price === "$0.00" ? "free" : cost}</Cost>
        </CostContainer>
        <Button onClick={handleDeleteBook}>✖</Button>
      </StyledCart>
    </>
  );
};
