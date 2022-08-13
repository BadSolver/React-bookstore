import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { Search } from "../Search/Search";
import {
  CartLogo,
  HeartLogo,
  Logo,
  Navbar,
  StyledHeader,
  UserLogo,
} from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={routes.HOME}>
        <Logo />
      </Link>

      <Search></Search>
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
    </StyledHeader>
  );
};
