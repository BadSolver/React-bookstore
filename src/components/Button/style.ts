import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 15px 10px;
  ${fonts.BodyRegular}
  text-align: center;
  color: ${Color.White};
  background-color: ${Color.Black};
  border: 1px solid ${Color.Black};
  :hover {
    background-color: ${Color.White};
    color: ${Color.Black};
    border: 1px solid ${Color.Black};
    transition: all 0.5s;
  }
`;
