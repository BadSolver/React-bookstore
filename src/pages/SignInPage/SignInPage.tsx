import React from "react";
import { SignIn } from "components";
import { Form, Sign, StyledSignIn } from "./style";

export const SignInPage = () => {
  return (
    <StyledSignIn>
      <Form>
        <Sign>Sign In</Sign>
        <SignIn />
      </Form>
    </StyledSignIn>
  );
};
