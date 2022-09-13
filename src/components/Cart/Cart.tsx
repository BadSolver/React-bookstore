import { memo } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks";
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
  const { amount } = useAppSelector(getCart);
  const { width = 0 } = useWindowSize();

  const dispatch = useAppDispatch();

  const handleCountPlus = () => {
    dispatch(countPlus(book));
  };
  const handleCountMinus = () => {
    dispatch(countMinus(book));
  };

  const handleDeleteBook = () => {
    dispatch(removeItem(book));
  };
  return (
    <>
      <StyledCart>
        {width > 800 && (
          <>
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
                <Subtitel>{amount[book.isbn13]}</Subtitel>
              </Count>
              <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
            </CountContainer>
            <CostContainer>
              <Cost>
                {book.price === "$0.00"
                  ? "free"
                  : amount[book.isbn13] *
                      Math.round(Number(book.price.slice(1))) +
                    "$"}
              </Cost>
            </CostContainer>
            <Button onClick={handleDeleteBook}>✖</Button>
          </>
        )}
        {width < 801 && (
          <>
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
                <Subtitel>{amount[book.isbn13]}</Subtitel>
              </Count>
              <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
              <CostContainer>
                <Cost>
                  {book.price === "$0.00"
                    ? "free"
                    : amount[book.isbn13] *
                        Math.round(Number(book.price.slice(1))) +
                      "$"}
                </Cost>
              </CostContainer>
              <Button onClick={handleDeleteBook}>✖</Button>
            </CountContainer>
          </>
        )}
      </StyledCart>
    </>
  );
});
