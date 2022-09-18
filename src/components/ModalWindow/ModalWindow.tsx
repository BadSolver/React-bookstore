import { AnimatePresence } from "framer-motion";
import React from "react";
import { Portal, PortalTarget } from "../Portal";
import { Button, Container, StyledModalWindow, Title, Wrapper } from "./style";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const ModalWindow = ({ isOpen, handleModal }: IProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <Portal target={PortalTarget.MODAL}>
          <StyledModalWindow
            onClick={handleModal}
            animate={{ x: 0 }}
            initial={{ x: 2000 }}
            exit={{ x: 2000 }}
            transition={{
              duration: 1,
            }}
          >
            <Wrapper>
              <Container>
                <Title>Congratulations, registration was successful</Title>
                <Button>Go to Sign In</Button>
              </Container>
            </Wrapper>
          </StyledModalWindow>
        </Portal>
      ) : null}
    </AnimatePresence>
  );
};
