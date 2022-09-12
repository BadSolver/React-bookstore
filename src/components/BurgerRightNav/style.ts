import styled from "styled-components";
import { Color, Space, fonts } from "../../ui";
import { StyledButton } from "../Button/style";

interface IProps {
  open?: boolean;
  close?: boolean;
}

export const StyledList = styled.ul<IProps>`
  margin: 0 auto;
  list-style: none;
  z-index: 3;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 375px;
    padding-top: 23px;
    text-align: center;
    color: ${Color.Primary};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s ease-in-out;
    background-color: ${Color.Backround};
  }
`;
export const Hr = styled.span`
  top: ${Space.SuperLarge};
  margin: 0 auto;
  margin-top: 35px;
  width: 288px;
  height: 1px;
  background: ${Color.Gray};
  margin-bottom: 20px;
`;
export const Background = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${Color.Black};
  opacity: 0.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Space.SuperLarge};
  margin: 0 auto;
  max-width: 287px;
  background: transparent;
`;
export const Title = styled.h3`
  ${fonts.H3}
  background: transparent;
  :hover {
    color: goldenrod;
    transition: all .4s;
  }
`;
export const Button = styled(StyledButton)`
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 10px 20px;
  font-size: ${Space.Medium};
  line-height: ${Space.Medium};
  letter-spacing: 0.05em;
  color: ${Color.White};
  background-color: ${Color.Black};
  
`;
export const ButtonForm = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
`