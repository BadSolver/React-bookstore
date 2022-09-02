import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookDetails,
  SliderCom,
  Subscribe,
  TabBar,
  Title,
} from "../../components";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { IBookDetails } from "../../types";

export const BookDetailsPage = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState<IBookDetails>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<boolean>(false);

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
    window.scrollTo({
      top: 120,
      behavior: "smooth",
    });
  }, [isbn]);

  const handleDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <BookDetails
        handleDetails={handleDetails}
        book={book}
        details={details}
        isLoading={isLoading}
        error={error}
      />
      <TabBar book={book} />
      <Subscribe />
      <Title text={"Similar Books"} />
      <SliderCom />
    </div>
  );
};
