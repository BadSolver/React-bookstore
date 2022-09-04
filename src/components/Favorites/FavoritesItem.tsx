import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { addItem } from "../../store/slices/cartSlice";
import { removeItemFavorites } from "../../store/slices/favoritesSlice";
import { IBookDetails } from "../../types";
import { Raiting } from "../Raiting";
import {
  StyledBookItem,
  ItemBackground,
  Cost,
  SubTitle,
  Title,
  Description,
  RateWithBuy,
  Button,
  TitleContainer,
  ButtonDeleteBook,
} from "./style";

interface IProps {
  book: IBookDetails;
}

export const FavoritesItem = ({ book }: IProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    return dispatch(addItem(book));
  };
  const handleDeleteBook = () => {
    dispatch(removeItemFavorites(book));
  };

  return (
    <>
      <TitleContainer>
        <Title>{book.title}</Title>
        <ButtonDeleteBook onClick={handleDeleteBook}>✖</ButtonDeleteBook>
      </TitleContainer>
      <StyledBookItem>
        <ItemBackground>
          <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
          <Link to={`/book/${book.isbn13}`}>
            <img src={book.image} alt={book.image} />
          </Link>
        </ItemBackground>
        <SubTitle>
          <Description>
            <p>{book.desc}</p>
            <p>{book.language}</p>
            <p>{book.subtitle}</p>
            <p>{book.pages}</p>
            <p>{book.url}</p>
            <p>{book.authors}</p>
            <p>{book.year}</p>
          </Description>
        </SubTitle>
        <RateWithBuy>
          <Raiting rating={book.rating} />
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </RateWithBuy>
      </StyledBookItem>

      {}
    </>
  );
};
