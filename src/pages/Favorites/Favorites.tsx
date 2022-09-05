import React, { useEffect, useRef } from "react";
import { Fave } from "../../assets";
import { ArrowBack, FavoritesItem, ScrollUp } from "../../components";
import { getFavorites, useAppSelector } from "../../store";
import { StyledFavorites, StyledTitleFavorites, Title } from "./style";

export const Favorites = () => {
  const { item } = useAppSelector(getFavorites);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("favorites", JSON.stringify(item));
    }
    isMounted.current = true;
  }, [item]);

  return (
    <>
      <ScrollUp />
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
          <img src={Fave} alt="" />
        </StyledTitleFavorites>
      )}
    </>
  );
};
