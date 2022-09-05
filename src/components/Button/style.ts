import styled from "styled-components";
import { Space, Color, fonts } from "../../ui";

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 15px 10px;
  ${fonts.BodyRegular}
  text-align: center;
  color: ${Color.White};
  background-color: ${Color.Primary};
  border: 1px solid black;
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.5s;
  }
`;
