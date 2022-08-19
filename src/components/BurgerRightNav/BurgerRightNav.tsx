import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import {
  Background,
  Button,
  Form,
  Hr,
  Search,
  StyledList,
  Title,
} from "./style";

interface IProps {
  open?: boolean;
  close?: () => void;
}

export const RightNav = ({ open, close }: IProps) => {
  const [auth, setAuth] = useState(true);

  if (auth) {
    return (
      <>
        <Background open={open} onClick={close} />
        <StyledList open={open}>
          <Hr />
          <Form>
            <Search placeholder="Search" open={open} />
            <Link to={routes.FAVORITES} onClick={close}>
              <Title>FAVORITES</Title>
            </Link>
            <Link to={routes.CART} onClick={close}>
              <Title>CART</Title>
            </Link>
          </Form>
          <Button>Log out</Button>
        </StyledList>
      </>
    );
  } else {
    return (
      <>
        <Background open={open} />
        <StyledList open={open}>
          <Hr />
          <Form>
            <Search placeholder="Search" open={open} />
          </Form>
          <Button>Sign In</Button>
        </StyledList>
      </>
    );
  }
};
