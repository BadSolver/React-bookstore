import { Link } from "react-router-dom";
import {
  BookstoreIcon,
  CartHeaderIcon,
  HeartHeaderIcon,
  UserHeaderIcon,
} from "assets";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { getCart, getFavorites, useAppSelector } from "store";
import { BurgerMenu } from "../BurgerMenu";
import { Search } from "../Search";
import { TogglerTheme } from "../TogglerTheme";
import {
  CartLogo,
  Count,
  HeartLogo,
  Logo,
  Navbar,
  StyledBurgerNavbar,
  UserLogo,
} from "./style";

export const BurgerNavbar = () => {
  const { item } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);

  const { width = 0 } = useWindowSize();

  return (
    <StyledBurgerNavbar>
      <Link to={ROUTE.HOME}>
        <Logo>
          <BookstoreIcon />
        </Logo>
      </Link>
      {width > 800 && (
        <>
          <Search />
          <TogglerTheme />
          <Navbar>
            <Link to={ROUTE.FAVORITES}>
              <HeartLogo item={item}>
                <HeartHeaderIcon />
              </HeartLogo>
            </Link>
            <Link to={ROUTE.CART}>
              <CartLogo cart={cart}>
                {cart.length > 0 && <Count>{cart.length}</Count>}
                <CartHeaderIcon />
              </CartLogo>
            </Link>
            <Link to={ROUTE.ACCOUNT}>
              <UserLogo>
                <UserHeaderIcon />
              </UserLogo>
            </Link>
          </Navbar>
        </>
      )}
      <BurgerMenu />
    </StyledBurgerNavbar>
  );
};
