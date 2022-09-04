import React from "react";
import { ArrowBack, FavoritesItem } from "../../components";
import { getFavorites, useAppSelector } from "../../store";
import { StyledFavorites, StyledTitleFavorites, Title } from "./style";

export const Favorites = () => {
  const { item } = useAppSelector(getFavorites);

  return (
    <>
      <ArrowBack />
      <StyledFavorites>
        {item.map((book) => (
          <FavoritesItem book={book} key={book.isbn13} />
        ))}
      </StyledFavorites>
      {item.length === 0 && (
        <StyledTitleFavorites>
          <Title>
            You don't have favorite books, please add from the store
          </Title>
          <img
            src="https://cdn.icon-icons.com/icons2/1950/PNG/512/free-30-instagram-stories-icons67_122614.png"
            alt=""
          />
        </StyledTitleFavorites>
      )}
    </>
  );
};
