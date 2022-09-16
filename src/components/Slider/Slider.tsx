import React, { memo, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  fetchNewBooks,
  getNewBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { BookItem } from "../BookItem";
import { StyledSlider } from "./style";

export const SliderCom = memo(() => {
  const { books } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {books.map((book) => {
          return <BookItem book={book} key={book.isbn13} />;
        })}
      </Slider>
    </StyledSlider>
  );
});
