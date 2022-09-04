import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { ROUTE } from "../../router";
import { Button } from "../Button";

import { Background, Form, Hr, Search, StyledList, Title } from "./style";

interface IProps {
  open?: boolean;
  close?: () => void;
}

export const RightNav = ({ open, close }: IProps) => {

  const {isAuth } = useAuth()

  if (isAuth) {
    return (
      <>
        <Background open={open} onClick={close} />
        <StyledList open={open}>
          <Hr />
          <Form>
            <Search placeholder="Search" open={open} />
            <Link to={ROUTE.FAVORITES} onClick={close}>
              <Title>FAVORITES</Title>
            </Link>
            <Link to={ROUTE.CART} onClick={close}>
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
          <Link to={ROUTE.SIGNIN} onClick={close}>
          <Button text="Sign In"></Button>
          </Link>
        </StyledList>
      </>
    );
  }
};
