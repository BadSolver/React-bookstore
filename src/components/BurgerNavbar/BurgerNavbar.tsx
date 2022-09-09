import { Link } from "react-router-dom";
import { Bookstore, CartHeader, HeartHeader, UserHeader } from "../../assets";
import { ROUTE } from "../../router";
import { getFavorites, useAppDispatch, useAppSelector } from "../../store";
import { getCart } from "../../store/selectors/cartSelector";
import { setThemesDark, setThemesLight } from "../../store/slices/userSlice";
import { BurgerMenu } from "../BurgerMenu";
import { Search } from "../Search";
import {
  ButtonTheme,
  CartLogo,
  HeartLogo,
  Logo,
  Navbar,
  StyledBurgerNavbar,
  TogglerTheme,
  UserLogo,
} from "./style";

export const BurgerNavbar = () => {
  const { item } = useAppSelector(getFavorites);
  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const handleThemeLight = () => {
    dispatch(setThemesLight());
  };
  const handleThemeDark = () => {
    dispatch(setThemesDark());
  };

  return (
    <>
      <StyledBurgerNavbar>
        <Link to={ROUTE.HOME}>
          <Logo>
            <Bookstore />
          </Logo>
        </Link>
        <Search />
        <TogglerTheme>
          <ButtonTheme onClick={handleThemeLight}>light</ButtonTheme>
          <ButtonTheme onClick={handleThemeDark}> dark</ButtonTheme>
        </TogglerTheme>

        <Navbar>
          <Link to={ROUTE.FAVORITES}>
            <HeartLogo item={item}>
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
