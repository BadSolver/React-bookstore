import styled from "styled-components";
import bookstore from "../../assets/bookstore.svg";
import logo from "../../assets/heart_header.svg";
import cart from "../../assets/cart_header.svg";
import user from "../../assets/user_header.svg";
import { Colors } from "../../ui/colors";
import { Spaces } from "../../ui/typography";

export const StyledHeader = styled.header`
  max-width: 1120px;
  margin-top: ${Spaces.medium};
  padding-bottom: 33px;
  border-bottom: 1px solid ${Colors.Gray};

  @media (max-width: 768px) {
    justify-content: space-between;
    margin-left: ${Spaces.large};
    margin-right: ${Spaces.large};
  }
`
export const Logo = styled.button`
  padding: 15px 70px;
  margin-top: 18px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;
export const CartLogo = styled.div`
  background: url(${cart}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 100px;
    margin-right: 31px;
  }
`;
export const UserLogo = styled.div`
  background: url(${user}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
