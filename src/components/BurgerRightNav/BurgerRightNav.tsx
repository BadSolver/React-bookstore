import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router";
import { Button } from "../Button";
import { Background, Form, Hr, Search, StyledList, Title } from "./style";

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
          <Button text="Log out"></Button>
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
          <Button text="Sign In"></Button>
        </StyledList>
      </>
    );
  }
};
