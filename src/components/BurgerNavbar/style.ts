import styled from "styled-components";

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
