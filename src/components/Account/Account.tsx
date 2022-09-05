import React, { useEffect, useRef } from "react";
import { useAuth } from "../../hooks";
import { LogOut } from "../LogOut";
import {
  BoldSubtitle,
  Container,
  Description,
  StyledAccount,
  SubTitle,
  Title,
} from "./style";

export const Account = () => {
  const { userDate, id, email } = useAuth();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("userDate", JSON.stringify(userDate));
      localStorage.setItem("userId", JSON.stringify(id));
      localStorage.setItem("userEmail", JSON.stringify(email));
    }
    isMounted.current = true;
  }, [userDate, id, email]);

  return (
    <StyledAccount>
      <Container>
        <Title>Welcome to the account pages</Title>
        <Description>
          <SubTitle>
            Your email upon registration:
            <BoldSubtitle>{email}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Unique number assigned to you:
            <BoldSubtitle>{id}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Date of your registration: <BoldSubtitle>{userDate}</BoldSubtitle>
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
