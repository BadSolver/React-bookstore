import { useEffect } from "react";
import { ArrowBack, BooksList, Search, Title } from "../../components";
import { getSearch } from "../../store/selectors/searchSelector";
import { fetchSearchedBooks } from "../../store/slices/searchSlice";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { decrementPage, useAppDispatch, useAppSelector } from "../../store";
import {
  StyledSearch,
  Previous,
  PrevText,
  Next,
  NextText,
  Container,
  SearchContainer,
} from "./style";
import { getPagesCount } from "../../utils";
import { useWindowSize } from "../../hooks";

export const SearchPages = () => {
  const { searchParams, searchResponse, isLoading, error } =
    useAppSelector(getSearch);
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if (
      searchParams.page &&
      searchResponse.total &&
      getPagesCount(searchResponse.total) > searchParams.page
    ) {
      dispatch(decrementPage(searchParams.page + 1));
    }
  };

  const handlePrev = () => {
    if (searchParams.page && searchParams.page > 1) {
      dispatch(decrementPage(searchParams.page - 1));
    }
  };

  useEffect(() => {
    if (searchParams.searchValue) {
      dispatch(
        fetchSearchedBooks({
          searchValue: searchParams.searchValue,
          page: searchParams.page,
        })
      );
    }
  }, [dispatch, searchParams]);

  return (
    <>
      <ArrowBack />
      <StyledSearch>
        <Title
          text={`'${
            searchParams.searchValue ? searchParams.searchValue : " "
          }' search results`}
        />
        {width < 801 && 
        <SearchContainer>
          <Search />
        </SearchContainer>}
        <BooksList
          books={searchResponse.books}
          isLoading={isLoading}
          error={error}
        />
        <Container>
          <Previous onClick={handlePrev}>
            <GrLinkPrevious
              style={{
                paddingTop: "5px",
              }}
            />
            <PrevText>Prev</PrevText>
          </Previous>
          <Next onClick={handleNext}>
            <NextText>Next</NextText>
            <GrLinkNext
              style={{
                paddingTop: "5px",
              }}
            />
          </Next>
        </Container>
      </StyledSearch>
    </>
  );
};
