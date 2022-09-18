import { FavoritesImage } from "assets";
import { ArrowBack, FavoritesItem } from "components";
import { getFavorites, useAppSelector } from "store";
import { StyledFavorites, StyledTitleFavorites, Title } from "./style";

export const FavoritesPage = () => {
  const { item } = useAppSelector(getFavorites);

  return (
    <>
      <ArrowBack />
      <StyledFavorites
        animate={{ x: 0 }}
        initial={{ x: 2500 }}
        transition={{
          duration: 1.5,
        }}
      >
        {item.map((book) => (
          <FavoritesItem book={book} key={book.isbn13} />
        ))}
      </StyledFavorites>
      {item.length === 0 && (
        <StyledTitleFavorites>
          <Title>
            You don't have favorite books, please add from the store
          </Title>
          <img src={FavoritesImage} alt="" />
        </StyledTitleFavorites>
      )}
    </>
  );
};
