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
export const Logo = styled.button`
  margin-top: 5px;
  background: transparent;
  border: none;
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
  color: ${Color.White};
  color: ${({ item }) => (item.length > 0 ? `red` : `${Color.White}`)};

  :hover {
    color: ${Color.Black};
    transition: all 0.5s;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartLogo = styled.div<ICart>`
  width: 24px;
  height: 24px;
  color: ${({ cart }) => (cart.length > 0 ? `red` : `${Color.White}`)};
  cursor: pointer;

  :hover {
    color: ${Color.Black};
    transition: all 0.5s;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  color: ${Color.White};
  cursor: pointer;

  :hover {
    color: ${Color.Black};
    transition: all 0.5s;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
