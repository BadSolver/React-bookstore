import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { Spaces } from "../../ui/typography";

interface IProps {
  open?: boolean;
}

export const StyledBurger = styled.div<IProps>`
  display: none;

  @media (max-width: 800px) {
    position: fixed;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    width: ${Spaces.medium};
    height: ${Spaces.medium};
    top: 28px;
    right: 40px;
    margin-left: ${Spaces.medium};
    z-index: 99;
  }

  div {
    display: flex;
    width: 29px;
    height: 2px;
    background: ${({ open }) =>
      open ? `${Colors.Primary}` : `${Colors.Primary}`};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(49deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-55deg)" : "rotate(0)")};
    }
  }
`;

// export const BurgerSpan = styled.span`
//     height: 2px;
//     width: 20px;
//     margin-bottom: 4px;
//     background-color: black;
//     display: none;

//     @media (max-width: 768px) {
//         display: block;
//     }
// `
