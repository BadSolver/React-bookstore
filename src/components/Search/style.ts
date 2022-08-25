import styled from "styled-components";
import cartHeader from "../../assets/search.svg";
import { Color, fonts } from "../../ui";

export const StyledSearch = styled.input`
  background: url(${cartHeader}) no-repeat right 20px center;
  flex: 0 0 48%;
  padding: 10px 20px;
  color: ${Color.Secondary};
  border: 1px solid ${Color.Gray};
  ${fonts.BodyRegular}
  outline: none;
  &::placeholder {
    ${fonts.BodyRegular}
    ${Color.Gray}
    opacity: 1
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
