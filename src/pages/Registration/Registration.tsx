import React, { useState } from "react";
import { SignIn, SignUp } from "../../components";
import { Container, Form, Sign, StyledRegistrtation } from "./style";

export const Registration = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(true);

  const handleSignIn = () => {
    setSignIn(true);
    setSignUp(false);
  };

  const handleSignUp = () => {
    setSignUp(true);
    setSignIn(false);
  };

  return (
    <StyledRegistrtation>
      <Container>
        <Sign onClick={handleSignIn} signIn={signIn}>
          Sign in
        </Sign>
        <Sign onClick={handleSignUp} signIn={signUp}>
          Sign up
        </Sign>
      </Container>
      <Form>
        {signIn && <SignIn />}
        {signUp && <SignUp />}
      </Form>
    </StyledRegistrtation>
  );
};
