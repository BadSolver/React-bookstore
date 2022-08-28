import React from "react";
import { StyledSignUp, Input, Title, Button } from "./style";

export const SignUp = () => {
  return (
    <StyledSignUp>
      <Title>Name</Title>
      <Input type="name" placeholder="name" />
      <Title>Email</Title>
      <Input type="email" placeholder="You email" />
      <Title>Password</Title>
      <Input type="password" placeholder="Password" />
      <Title>Confirm password</Title>
      <Input type="password" placeholder="Confirm password" />
      <Button type="submit">Sign in</Button>
    </StyledSignUp>
  );
};
