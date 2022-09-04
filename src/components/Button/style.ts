import styled from "styled-components";
import { Space, Color } from "../../ui";

export const StyledButton = styled.button`
  display: none;
  border: none;
  padding: 16px 100px;
  margin: 0 auto;
  margin-top: 512px;
  text-align: center;
  font-size: ${Space.Medium};
  line-height: ${Space.Medium};
  letter-spacing: 0.05em;
  color: ${Color.White};
  background-color: ${Color.Primary};
  border: 1px solid black;
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
