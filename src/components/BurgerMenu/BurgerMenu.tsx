import { useState } from "react";
import { RightNav } from "../BurgerRightNav";
import {  StyledBurger } from "./style";

export const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleClose =()=> {
    setIsOpen(false)
  }

  
  return (
    <>
      <StyledBurger open={isOpen} onClick={handleOpen} >
      <div></div>
      <div></div>
      <div></div>
      </StyledBurger>
      <RightNav open={isOpen} close={handleClose}/>
    </>
    
  );
};
