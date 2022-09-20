import React from "react";
import { Description, NotFoundStyled, Title } from "./style";

export const NotFounded = () => {
  return (
    <NotFoundStyled>
      <Title>404</Title>
      <Description>This page does not exist</Description>
    </NotFoundStyled>
  );
};
