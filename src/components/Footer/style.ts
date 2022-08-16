import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { fonts, Spaces } from "../../ui/typography";

export const StyledFooter = styled.footer`
  max-width: 1120px;
  margin-top: ${Spaces.extraLarge};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${Colors.Gray};
  @media (max-width: 768px) {
    margin-left: ${Spaces.large};
    margin-right: ${Spaces.large};
  }
`;
export const Description = styled.p`
  padding: 36px 0;
  ${fonts.BodyRegular}
  ${Colors.Secondary}
`;
