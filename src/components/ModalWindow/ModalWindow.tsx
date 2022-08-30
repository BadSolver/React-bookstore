import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
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
        <Link to={ROUTE.SIGNIN}>
          <button>Go to home page</button>
        </Link>
      </StyledModalWindow>
    </Portal>
  ) : null;
};
