import { Link } from "react-router-dom";
import { Bookstore, CartHeader, HeartHeader, UserHeader } from "../../assets";
import { ROUTE } from "../../router";
import { useAppSelector } from "../../store";
import { getCart } from "../../store/selectors/cartSelector";
import { BurgerMenu } from "../BurgerMenu";
import { Search } from "../Search";
import {
  CartLogo,
  HeartLogo,
  Logo,
  Navbar,
  StyledBurgerNavbar,
  UserLogo,
} from "./style";

export const BurgerNavbar = () => {

  const {cart} = useAppSelector(getCart)

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
            <HeartLogo >
              <HeartHeader />
            </HeartLogo>
          </Link>
          <Link to={ROUTE.CART}>
            <CartLogo cart={cart}>
              <CartHeader />
            </CartLogo>
          </Link>
          <Link to={ROUTE.ACCOUNT}>
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
