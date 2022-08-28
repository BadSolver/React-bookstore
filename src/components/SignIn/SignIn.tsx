import React from "react";
import { Button, Input, StyledSignIn, Title } from "./style";

export const SignIn = () => {
  return (
    <StyledSignIn>
        <Title>Email</Title>
        <Input type="email" placeholder="You email" />
        <Title>Password</Title>
        <Input type="password" placeholder="Password" />
            <p>Forgot password?</p>
        <Button type="submit">Sign in</Button>
    </StyledSignIn>
  );
};
