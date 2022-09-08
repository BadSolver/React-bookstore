import styled from "styled-components";
import { IBookDetails } from "../../types";
import { Color } from "../../ui";

interface ICart {
  cart: IBookDetails[];
}
interface Ifavorites {
  item: IBookDetails[];
}

export const StyledBurgerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768) {
  }
`;
export const Logo = styled.div`
  margin-top: 5px;
  color:${Color.Black};
  cursor: pointer;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
`;
export const HeartLogo = styled.div<Ifavorites>`
  cursor: pointer;

  stroke: ${({ item }) => (item.length > 0 ? `red` : `${Color.Black}`)};

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartLogo = styled.div<ICart>`
  width: 24px;
  height: 24px;
  stroke: ${({ cart }) => (cart.length > 0 ? `red` : `${Color.Black}`)};
  cursor: pointer;

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  stroke: ${Color.Black};
  cursor: pointer;

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
export const TogglerTheme = styled.div`
  align-self: center;
`;

export const ButtonTheme = styled.button`
  background: black;
  color: white;
  border-color: white;
  
  &:first-child {
    border: 1px solid #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    background: transparent;
  }
  &:last-child {
    border: 1px solid #1B1B1D;
    color: #1B1B1D;
    background: transparent;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
