import { AxiosError } from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { ErrorMessage } from "../../components";
import { Raiting } from "../../components/Raiting";
import { Title } from "../../components/Title";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { IBookDetails } from "../../types";
import { getAuthor } from "../../utils";
import { Arrow, StyledBookDetails } from "./style";

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
  console.log(book);

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
    <StyledBookDetails>
      {isLoading && <RingLoader cssOverride={override} size={50} />}
      {error && <ErrorMessage text={error} />}
      {book && (
        <>
        <Arrow>
        <BsArrowBarLeft onClick={handleArrow} style={{fontSize: '50px'}}/>
        </Arrow>
          <Title text={book.title}></Title>
          <img src={book.image} />
          <Raiting rating={book.rating} />
        </>
      )}
    </StyledBookDetails>
  );
};
