import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { fonts } from "../../ui/typography";

export const StyledFooter = styled.footer`
  max-width: 1120px;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${Colors.Gray};
`;
export const Description = styled.p`
  padding: 36px 0;
  ${fonts.BodyRegular}
  ${Colors.Secondary}
`;
