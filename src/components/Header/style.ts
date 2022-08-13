import styled from "styled-components";
import bookstore from "../../assets/bookstore.svg";
import logo from "../../assets/heart_header.svg";
import cart from "../../assets/cart_header.svg";
import user from "../../assets/user_header.svg";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`;
export const Logo = styled.button`
  width: 137px;
  background: url(${bookstore}) no-repeat center;
  border: none;
  cursor: pointer;
`;
export const Navbar = styled.nav`
  width: 184px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeartLogo = styled.a`
  background: url(${logo}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const CartLogo = styled.a`
  background: url(${cart}) no-repeat;
  width: 24px;
  height: 24px;
`;
export const UserLogo = styled.a`
  background: url(${user}) no-repeat;
  width: 24px;
  height: 24px;
`;
