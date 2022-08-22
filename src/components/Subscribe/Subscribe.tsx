import React from "react";
import {
  Background,
  Button,
  Input,
  InputContainer,
  StyledSubscribe,
  Subtitle,
  Title,
} from "./style";

export const Subscribe = () => {
  return (
    <Background>
      <StyledSubscribe>
        <Title> Subscribe to Newsletter </Title>
        <Subtitle>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </Subtitle>
        <InputContainer>
          <Input placeholder="Your Email"></Input>
          <Button type="submit">Subscribe</Button>
        </InputContainer>
      </StyledSubscribe>
    </Background>
  );
};
