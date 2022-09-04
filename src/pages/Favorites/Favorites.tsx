import React from "react";
import { ArrowBack, FavoritesItem } from "../../components";
import { getFavorites, useAppSelector } from "../../store";
import { StyledFavorites, Title } from "./style";

export const Favorites = () => {
  const { item } = useAppSelector(getFavorites);

  return (
    <>
      <ArrowBack />
      <StyledFavorites>
        {item.map((book) => (
          <FavoritesItem book={book} />
        ))}
      </StyledFavorites>
      {item.length === 0 && (
        <StyledFavorites>
          <Title>
            You don't have favorite books, please add from the store
          </Title>
        </StyledFavorites>
      )}
    </>
  );
};
