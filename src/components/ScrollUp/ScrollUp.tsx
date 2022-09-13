import React from "react";
import { ButtonScroll } from "./style";

export const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return <ButtonScroll onClick={handleScrollUp}>!</ButtonScroll>;
};
