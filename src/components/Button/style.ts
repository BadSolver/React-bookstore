import styled from "styled-components";
import { Space, Color } from "../../ui";

export const StyledButton = styled.button`
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
