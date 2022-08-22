import styled from "styled-components";
import bookstore from "../../assets/bookstore.svg";
import logo from "../../assets/heart_header.svg";
import cart from "../../assets/cart_header.svg";
import user from "../../assets/user_header.svg";

export const StyledBurgerNavbar = styled.nav`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768) {
  }
`;
export const Logo = styled.button`
  padding: 15px 70px;
  background: url(${bookstore}) no-repeat center;
  border: none;
  cursor: pointer;
`;
export const Navbar = styled.nav`
  width: 184px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeartLogo = styled.div`
  background: url(${logo}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartLogo = styled.div`
  background: url(${cart}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    margin-left: 100px;
    margin-right: 31px;
  }
  @media (max-width: 568px) {
    margin-left: 3px;
    margin-right: 10;
  }
`;
export const UserLogo = styled.div`
  background: url(${user}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;
