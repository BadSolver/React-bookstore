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
`;
export const Logo = styled.div`
  margin-top: 5px;
  color: ${Color.Black};
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

  stroke: ${({ item }) => (item.length > 0 ? "red" : `${Color.Black}`)};

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
`;
export const CartLogo = styled.div<ICart>`
  width: 24px;
  height: 24px;
  stroke: ${({ cart }) => (cart.length > 0 ? "red" : `${Color.Black}`)};
  cursor: pointer;

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
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
`;

export const Count = styled.div`
  position: absolute;
  top: 24px;
  background-color: goldenrod;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
`;
