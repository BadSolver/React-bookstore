import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { Spaces } from "../../ui/typography";

export const StyledButton = styled.button`
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
