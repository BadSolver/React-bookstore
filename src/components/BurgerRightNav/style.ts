import styled from "styled-components";
import { Color, Space, fonts } from "../../ui";
import { StyledSearch } from "../Search/style";

interface IProps {
  open?: boolean;
  close?: boolean;
}

export const StyledList = styled.ul<IProps>`
  display: none;
  list-style: none;
  margin: 0 auto;
  z-index: 3;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${Color.White};
    color: ${Color.Primary};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 368px;
    padding-top: 3.5rem;
    text-align: center;
  }
`;
export const Hr = styled.span`
  display: none;
  position: relative;
  top: ${Space.SuperLarge};
  width: 288px;
  height: 1px;
  background: ${Color.Gray};
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Background = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${Color.Gray};
  opacity: 0.8;
  z-index: 0;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const Search = styled(StyledSearch)<IProps>`
  display: none;
  flex: 50%;
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
`;
export const Title = styled.h3`
  display: none;
  ${fonts.H3}

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Button = styled.button`
  display: none;
  border: none;
  text-align: center;
  font-size: ${Space.Medium};
  line-height: ${Space.Medium};
  letter-spacing: 0.05em;
  color: ${Color.White};
  padding: 16px 100px;
  margin: 0 auto;
  margin-top: 512px;
  background-color: ${Color.Primary};

  @media (max-width: 800px) {
    display: block;
  }
`;
