import { useState } from "react";
import { useWindowSize } from "../../hooks";
import { RightNav } from "../BurgerRightNav";
import { StyledBurger } from "./style";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {width < 801 && (
        <>
          <StyledBurger open={isOpen} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
          <RightNav open={isOpen} close={handleClose} />
        </>
      )}
    </>
  );
};
