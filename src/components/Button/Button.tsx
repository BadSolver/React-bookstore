import React from "react";
import { StyledButton } from "./style";

interface IProps {
  text: string;
}

export const Button = ({ text }: IProps) => {
  return <StyledButton whileHover={{scale: 1.1}}>{text}</StyledButton>;
};
