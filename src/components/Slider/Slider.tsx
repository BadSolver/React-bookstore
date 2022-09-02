import React, { CSSProperties, useEffect, useState } from "react";
import { StyledSlider } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AxiosError } from "axios";
import { bookStoreAPI } from "../../services/bookStoreApi";
import { INewBooksApi } from "../../types";
import { BookItem } from "../BookItem";
import { RingLoader } from "react-spinners";
import { ErrorMessage } from "../ErrorMessage";
import { BsArrowLeft } from "react-icons/bs";

export const SliderCom = () => {
  const [books, setBooks] = useState<INewBooksApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchBooks = async () => {
    try {
      setError("");
      setIsLoading(true);

      await bookStoreAPI.getNew().then((book) => {
        setBooks(book.books);
      });

      setIsLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const override: CSSProperties = {
    display: "block",
    margin: "100px auto 0 auto",
  };

  const settings = {
    dots: true,
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {isLoading && <RingLoader cssOverride={override} size={50} />}
        {error && <ErrorMessage text={error} />}
        {books.map((book) => {
          return <BookItem book={book} key={book.isbn13} />;
        })}
      </Slider>
    </StyledSlider>
  );
};
