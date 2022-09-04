import React from "react";

interface IProps {
  text: string | null;
}

export const ErrorMessage = ({ text }: IProps) => {
  return <div>{text}</div>;
};
