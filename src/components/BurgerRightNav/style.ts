import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { fonts, Spaces } from "../../ui/typography";
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

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${Colors.White};
    color: ${Colors.Primary};
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
  top: ${Spaces.superLarge};
  width: 288px;
  height: 1px;
  background: ${Colors.Gray};
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Background = styled.div<IProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.Gray};
  opacity: 0.8;
  z-index: 0;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const Search = styled(StyledSearch)<IProps>`
  display: none;
  flex: 50%;
  padding: 17px 60px 17px 30px;
  margin-top: 56px;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Spaces.superLarge};
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
  font-size: ${Spaces.medium};
  line-height: ${Spaces.medium};
  letter-spacing: 0.05em;
  color: ${Colors.White};
  padding: 16px 100px;
  margin: 0 auto;
  margin-top: 512px;
  background-color: ${Colors.Primary};

  @media (max-width: 768px) {
    display: block;
  }
`;
