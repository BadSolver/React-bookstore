import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { BurgerMenu } from "../BurgerMenu";
import { Search } from "../Search/Search";
import { CartLogo, HeartLogo, Logo, Navbar, StyledBurgerNavbar, UserLogo } from "./style";

export const BurgerNavbar = () => {
  return (
    <>
      <StyledBurgerNavbar>
        <Link to={routes.HOME}>
          <Logo />
        </Link>
        <Search />
        <Navbar>
          <Link to={routes.FAVORITES}>
            <HeartLogo />
          </Link>
          <Link to={routes.CART}>
            <CartLogo />
          </Link>
          <Link to={routes.SIGNIN}>
            <UserLogo />
          </Link>
        </Navbar>
      </StyledBurgerNavbar>
      <BurgerMenu />
    </>
  );
};
