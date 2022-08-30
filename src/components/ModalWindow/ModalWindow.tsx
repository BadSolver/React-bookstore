import React from "react";
import { Portal, PortalTarget } from "../Portal";
import { StyledModalWindow } from "./style";

interface IProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const ModalWindow = ({ isOpen, handleModal }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <StyledModalWindow onClick={handleModal}>
        <button>123123213</button>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
