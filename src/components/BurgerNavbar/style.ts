import styled from "styled-components";

export const StyledBurgerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768) {
  }
`;
export const Logo = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 5px;
`;
export const Navbar = styled.nav`
  width: 184px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeartLogo = styled.div`
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartLogo = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;
