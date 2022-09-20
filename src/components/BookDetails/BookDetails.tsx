import React from "react";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { ArrowBack, ErrorMessage, Loader, Raiting, Title } from "components";
import { useToggle } from "hooks";
import { useAppDispatch } from "store";
import { addItem } from "store/slices/cartSlice";
import { addItemFavorites } from "store/slices/favoritesSlice";
import { IBookDetails } from "types";
import {
  BackGround,
  Button,
  Container,
  Cost,
  Description,
  DetailsContainer,
  LabelText,
  MoreDetails,
  Options,
  Price,
  StyledBookDetails,
  ValueText,
  Image,
  ButtonContainer,
  ContainerArrow,
} from "./style";

interface IProps {
  isLoading: boolean;
  book: IBookDetails;
  error: string | null;
  details: boolean;
  handleDetails: () => void;
}

export const BookDetails = ({
  isLoading,
  book,
  error,
  details,
  handleDetails,
}: IProps) => {
  const [isActive, setIsActive] = useToggle();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(book));
  };
  const hadleAddToFavorites = () => {
    dispatch(addItemFavorites(book));
  };

  return (
    <>
      <ArrowBack />
      {isLoading && <Loader size="50px" margin="200px"/>}
      {error && <ErrorMessage text={error} />}
      {book && (
        <StyledBookDetails
          animate={{ x: 0 }}
          initial={{ x: 2500 }}
          transition={{
            duration: 1.5,
          }}
        >
          <Title text={book.title}></Title>
          <DetailsContainer>
            <BackGround>
              <Image src={book.image} />
            </BackGround>
            <Description>
              <Cost>
                <Price>{book.price === "$0.00" ? "free" : book.price}</Price>
                <Raiting rating={book.rating} />
              </Cost>
              <Options>
                <Container>
                  <ValueText>Authors</ValueText>
                  <LabelText>{book.authors}</LabelText>
                </Container>
                <Container>
                  <ValueText>Publisher</ValueText>
                  <LabelText>{book.publisher}</LabelText>
                </Container>
                <Container>
                  <ValueText>Language</ValueText>
                  <LabelText>{book.language}</LabelText>
                </Container>
                <Container>
                  <ValueText>Year</ValueText>
                  <LabelText>{book.year}</LabelText>
                </Container>
                <div onClick={setIsActive}>
                  <MoreDetails onClick={handleDetails}>
                    {isActive ? (
                      <ContainerArrow>
                        More details <HiArrowSmUp /> 
                      </ContainerArrow>
                    ) : (
                      <ContainerArrow>
                        More details <HiArrowSmDown />
                      </ContainerArrow>
                    )}
                  </MoreDetails>
                </div>

                {details && (
                  <>
                    <Container>
                      <ValueText>Pages</ValueText>
                      <LabelText>{book.pages}</LabelText>
                    </Container>
                    <Container>
                      <ValueText>ISBN13</ValueText>
                      <LabelText>{book.isbn13}</LabelText>
                    </Container>
                    <Container>
                      <ValueText>Link</ValueText>
                      <LabelText>
                        <a href={book.url} target="blank">
                          See more
                        </a>
                      </LabelText>
                    </Container>
                  </>
                )}
              </Options>
              <ButtonContainer>
                <Button onClick={handleAddToCart} whileTap={{ scale: 1.4 }}>
                  Add to Cart
                </Button>
                <Button onClick={hadleAddToFavorites} whileTap={{ scale: 1.4 }}>
                  Add to favorites
                </Button>
              </ButtonContainer>
            </Description>
          </DetailsContainer>
        </StyledBookDetails>
      )}
    </>
  );
};
