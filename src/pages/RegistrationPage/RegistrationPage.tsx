import React, { useState } from "react";
import { ArrowBack, ModalWindow, SignIn, SignUp } from "components";
import { useToggle } from "hooks";
import { Container, Form, Sign, StyledRegistrtation } from "./style";

export const RegistrationPage = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [isOpen, setIsOpen] = useToggle();

  const handleSignIn = () => {
    setSignIn(true);
    setSignUp(false);
  };

  const handleSignUp = () => {
    setSignUp(true);
    setSignIn(false);
  };

  return (
    <>
      <ArrowBack />
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
          {signUp && <SignUp handleModal={setIsOpen} />}
          <ModalWindow isOpen={isOpen} handleModal={setIsOpen} />
        </Form>
      </StyledRegistrtation>
    </>
  );
};
