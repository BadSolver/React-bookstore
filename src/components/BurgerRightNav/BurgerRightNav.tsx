import { Link } from "react-router-dom";
import { useAuth, useWindowSize } from "hooks";
import { ROUTE } from "router";
import { removeUser, useAppDispatch } from "store";
import { TogglerTheme } from "../TogglerTheme";

import {
  Background,
  Button,
  ButtonForm,
  Form,
  Hr,
  StyledList,
  Title,
} from "./style";

interface IProps {
  open?: boolean;
  close?: () => void;
}

export const RightNav = ({ open, close }: IProps) => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const hadleLogOut = () => {
    dispatch(removeUser());
  };

  const { isAuth } = useAuth();

  if (isAuth) {
    return (
      <>
        {width < 801 && (
          <>
            <Background open={open} onClick={close} />
            <StyledList open={open}>
              <TogglerTheme />
              <Hr />
              <Form>
                <Link to={ROUTE.FAVORITES} onClick={close}>
                  <Title>FAVORITES</Title>
                </Link>
                <Link to={ROUTE.ACCOUNT} onClick={close}>
                  <Title>Account</Title>
                </Link>
                <Link to={ROUTE.SEARCH} onClick={close}>
                  <Title>Search</Title>
                </Link>
                <Link to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </Link>
                <Link to={ROUTE.CART} onClick={close}>
                  <Title>Cart</Title>
                </Link>
              </Form>
              <Link to={ROUTE.HOME} onClick={close}>
                <Button onClick={hadleLogOut}>Log Out</Button>
              </Link>
            </StyledList>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {width < 801 && (
          <>
            <Background open={open} />
            <StyledList open={open}>
              <TogglerTheme />
              <Hr />
              <Form>
                <Link to={ROUTE.FAVORITES} onClick={close}>
                  <Title>FAVORITES</Title>
                </Link>
                <Link to={ROUTE.SEARCH} onClick={close}>
                  <Title>Search</Title>
                </Link>
                <Link to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </Link>
                <Link to={ROUTE.CART} onClick={close}>
                  <Title>Cart</Title>
                </Link>
              </Form>
              <ButtonForm>
                <Link to={ROUTE.SIGNIN} onClick={close}>
                  <Button>Sign In</Button>
                </Link>
                <Link to={ROUTE.REGISTRATION} onClick={close}>
                  <Button>Sign up</Button>
                </Link>
              </ButtonForm>
            </StyledList>
          </>
        )}
      </>
    );
  }
};
