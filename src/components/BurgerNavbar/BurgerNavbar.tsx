import { Link } from "react-router-dom";
import { Bookstore, CartHeader, HeartHeader, UserHeader } from "../../assets";
import { ROUTE } from "../../router/routes";
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
        <Link to={ROUTE.HOME}>
          <Logo>
            <Bookstore />
          </Logo>
        </Link>
        <Search />
        <Navbar>
          <Link to={ROUTE.FAVORITES}>
            <HeartLogo>
              <HeartHeader />
            </HeartLogo>
          </Link>
          <Link to={ROUTE.CART}>
            <CartLogo>
              <CartHeader />
            </CartLogo>
          </Link>
          <Link to={ROUTE.SIGNIN}>
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
