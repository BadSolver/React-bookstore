import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { Spaces } from "../../ui/typography";

export const StyledHeader = styled.header`
  max-width: 1120px;
  margin-top: ${Spaces.medium};
  padding-bottom: 33px;
  border-bottom: 1px solid ${Colors.Gray};

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`