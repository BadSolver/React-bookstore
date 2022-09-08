import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { ROUTE } from "../../router";
import { removeUser, useAppDispatch } from "../../store";
import { Search } from "../Search";

import { Background, Button, Form, Hr, StyledList, Title } from "./style";

interface IProps {
  open?: boolean;
  close?: () => void;
}

export const RightNav = ({ open, close }: IProps) => {

  const dispatch = useAppDispatch()
  const hadleLogOut = () => {
    dispatch(removeUser())
  }

  const {isAuth } = useAuth()

  if (isAuth) {
    return (
      <>
        <Background open={open} onClick={close} />
        <StyledList open={open}>
          <Hr />
          <Form>
            <Search  />
            <Link to={ROUTE.FAVORITES} onClick={close}>
              <Title>FAVORITES</Title>
            </Link>
            <Link to={ROUTE.CART} onClick={close}>
              <Title>CART</Title>
            </Link>
          </Form>
          <Button onClick={hadleLogOut}>Log Out</Button>
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
            <Search   />
          </Form>
          <Link to={ROUTE.SIGNIN} onClick={close}>
          <Button >Sign In</Button>
          </Link>
        </StyledList>
      </>
    );
  }
};
