import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { StyledRating } from "./style";

interface IProps {
  rating: string;
}

export const Raiting = ({ rating }: IProps) => {
  const currRating = +rating;
  const totalRating = 5;

  return (
    <StyledRating>
      {[...new Array(totalRating)].map((arr, index) => {
        if (index < currRating) {
          return <FaStar key={index} style={{ fontSize: "18px", color: "#ffd700" }} />;
        } else return <BsStar key={index} style={{ fontSize: "18px" }} />;
      })}
    </StyledRating>
  );
};
