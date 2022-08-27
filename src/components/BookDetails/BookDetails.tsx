import React, { CSSProperties } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { ErrorMessage } from "../../components";
import { Raiting } from "../../components/Raiting";
import { Title } from "../../components/Title";
import { IBookDetails } from "../../types";
import {
  Arrow,
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
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading && <RingLoader cssOverride={override} size={50} />}
      {error && <ErrorMessage text={error} />}
      {book && (
        <StyledBookDetails>
          <Arrow>
            <BsArrowLeft onClick={handleArrow} style={{ fontSize: "30px" }} />
          </Arrow>
          <Title text={book.title}></Title>
          <DetailsContainer>
            <BackGround>
              <Image src={book.image} />
            </BackGround>
            <Description>
              <Cost>
                <Price>{book.price}</Price>
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
                <MoreDetails onClick={handleDetails}>More Details</MoreDetails>
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
