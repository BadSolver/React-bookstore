import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
import { Portal, PortalTarget } from "../Portal";
import { Button, Container, StyledModalWindow, Title, Wrapper } from "./style";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const ModalWindow = ({ isOpen, handleModal }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <StyledModalWindow onClick={handleModal}>
        <Wrapper>
          <Container>
            <Title>Congratulations, registration was successful</Title>
            <Link to={ROUTE.SIGNIN}>
              <Button>Go to Sign In</Button>
            </Link>
          </Container>
        </Wrapper>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
