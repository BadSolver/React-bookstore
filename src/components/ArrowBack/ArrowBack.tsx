import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Arrow } from "./style";

export const ArrowBack = () => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <Arrow>
      <BsArrowLeft onClick={handleArrow} style={{ fontSize: "30px" }} />
    </Arrow>
  );
};
