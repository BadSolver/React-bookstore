import styled from "styled-components";
// import cartHeader from '../../assets/cartHeader.svg'
import cartHeader from "../../assets/search.svg";
import { Colors } from "../../ui/colors";
import { fonts } from "../../ui/typography";

export const StyledSearch = styled.input`
  background: url(${cartHeader}) no-repeat right 20px center;
  padding: 14px 320px 20px 20px;
  color: ${Colors.Secondary};
  border: 1px solid ${Colors.Gray};
  ${fonts.BodyRegular}
  outline: none;
  &::placeholder {
    ${fonts.BodyRegular}
    ${Colors.Gray}
    opacity: 1
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
