import { BurgerNavbar } from "../BurgerNavbar";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader
      animate={{ x: 0 }}
      initial={{ x: 2500 }}
      transition={{
        duration: 1.5,
      }}
    >
      <BurgerNavbar />
    </StyledHeader>
  );
};
