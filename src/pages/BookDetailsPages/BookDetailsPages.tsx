import { AxiosError } from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { ErrorMessage } from "../../components";
import { Raiting } from "../../components/Raiting";
import { Title } from "../../components/Title";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { IBookDetails } from "../../types";
import {
  Arrow,
  DetailsContainer,
  StyledBookDetails,
  Image,
  Description,
  Cost,
  BackGround,
  Price,
  Options,
  Authors,
  Publisher,
  Language,
  Year,
  LabelText,
  ValueText,
} from "./style";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto 0 auto",
};

export const BookDetailsPage = () => {
  const navigate = useNavigate();
  const { isbn } = useParams();
  const [book, setBook] = useState<IBookDetails>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleArrow = () => {
    navigate(-1);
  };

  const fetchDetails = async () => {
    try {
      setError("");
      setIsLoading(true);

      await bookStoreAPI.getDetails(isbn).then((detail) => {
        setBook(detail);
      });
      setIsLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setIsLoading(true);
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [isbn]);

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
                <Authors>
                  <ValueText>Authors</ValueText>
                  <LabelText>{book.authors}</LabelText>
                </Authors>
                <Publisher>
                  <ValueText>Publisher</ValueText>
                  <LabelText>{book.publisher}</LabelText>
                </Publisher>
                <Language>
                  <ValueText>Language</ValueText>
                  <LabelText>{book.language}</LabelText>
                </Language>
                <Year>
                  <ValueText>Year</ValueText>
                  <LabelText>{book.year}</LabelText>
                </Year>
              </Options>
              <MoreDetails></MoreDetails>
            </Description>
          </DetailsContainer>
        </StyledBookDetails>
      )}
    </>
  );
};
