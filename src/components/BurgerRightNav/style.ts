import styled from "styled-components";
import { Color, Space, fonts } from "../../ui";
import { StyledSearch } from "../Search/style";

interface IProps {
  open?: boolean;
  close?: boolean;
}

export const StyledList = styled.ul<IProps>`
  display: none;
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
    width: 368px;
    padding-top: 3.5rem;
    text-align: center;
    color: ${Color.Primary};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s ease-in-out;
    background-color: ${Color.White};
  }
`;
export const Hr = styled.span`
  position: relative;
  top: ${Space.SuperLarge};
  display: none;
  margin: 0 auto;
  width: 288px;
  height: 1px;
  background: ${Color.Gray};

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Background = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${Color.Black};
  opacity: 0.8;
`;

export const Search = styled(StyledSearch)<IProps>`
  display: none;
  width: 90%;
  padding: 17px 60px 17px 30px;
  margin-top: 56px;

  @media (max-width: 800px) {
    display: block;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Space.SuperLarge};
  margin: 56px auto 0 auto;
  max-width: 287px;
  background: transparent;
`;
export const Title = styled.h3`
  display: none;
  ${fonts.H3}
  background: transparent;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Button = styled.button`
  display: none;
  margin: 0 auto;
  margin-top: 512px;
  padding: 16px 100px;
  text-align: center;
  font-size: ${Space.Medium};
  line-height: ${Space.Medium};
  letter-spacing: 0.05em;
  border: none;
  color: ${Color.White};
  background-color: ${Color.Primary};

  @media (max-width: 800px) {
    display: block;
  }
`;
