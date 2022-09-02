import React, { CSSProperties } from "react";
import { RingLoader } from "react-spinners";
import { ArrowBack, ErrorMessage } from "../../components";
import { Raiting } from "../../components/Raiting";
import { Title } from "../../components/Title";
import { useToggle } from "../../hooks";
import { IBookDetails } from "../../types";
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
} from "./style";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto 0 auto",
};

interface IProps {
  isLoading: boolean;
  book: IBookDetails | undefined;
  error: string;
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

  return (
    <>
      <ArrowBack />
      {isLoading && <RingLoader cssOverride={override} size={50} />}
      {error && <ErrorMessage text={error} />}
      {book && (
        <StyledBookDetails>
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
                    {isActive ? "More Details 🠕" : "More Details  🠗"}
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
                      <LabelText>{book.url}</LabelText>
                    </Container>
                  </>
                )}
              </Options>

              <Button>Add to Cart</Button>
            </Description>
          </DetailsContainer>
        </StyledBookDetails>
      )}
    </>
  );
};
