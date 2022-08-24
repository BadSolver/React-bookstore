import styled from "styled-components";

export const StyledBurgerNavbar = styled.nav`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768) {
  }
`;
export const Logo = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
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
    margin-left: 100px;
    margin-right: 31px;
  }
  @media (max-width: 568px) {
    margin-left: 3px;
    margin-right: 10;
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
