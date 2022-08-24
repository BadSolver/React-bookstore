import { Link } from "react-router-dom";
import { Bookstore, CartHeader, HeartHeader, UserHeader } from "../../assets";
import { routes } from "../../router/routes";
import { BurgerMenu } from "../BurgerMenu";
import { Search } from "../Search/Search";
import {
  CartLogo,
  HeartLogo,
  Logo,
  Navbar,
  StyledBurgerNavbar,
  UserLogo,
} from "./style";

export const BurgerNavbar = () => {
  return (
    <>
      <StyledBurgerNavbar>
        <Link to={routes.HOME}>
          <Logo>
            <Bookstore></Bookstore>
          </Logo>
        </Link>
        <Search />
        <Navbar>
          <Link to={routes.FAVORITES}>
            <HeartLogo>
              <HeartHeader />
            </HeartLogo>
          </Link>
          <Link to={routes.CART}>
            <CartLogo>
              <CartHeader />
            </CartLogo>
          </Link>
          <Link to={routes.SIGNIN}>
            <UserLogo>
              <UserHeader />
            </UserLogo>
          </Link>
        </Navbar>
      </StyledBurgerNavbar>
      <BurgerMenu />
    </>
  );
};
