import styled from "styled-components";
import cartHeader from "../../assets/search.svg";
import { Color, fonts } from "../../ui";

export const Input = styled.input`
  width: 90%;
  padding: 10px 20px;
  color: ${Color.Secondary};
  border: 1px solid ${Color.Black};
  border-radius: 10px;
  opacity: 30%;
  ${fonts.BodyRegular}
  outline: none;

  &::placeholder {
    ${fonts.BodyRegular}
    ${Color.Gray}
    opacity: 1
  }
  &:hover {
    border: 1px solid ${Color.PrimaryDark};
    transition: all 0.5s;
  }
  &:focus {
    opacity: 80%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
export const Button = styled.div`
  align-self: center;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  color:${Color.Black};
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const StyledSearch = styled.div`
  display: flex;
  width: 500px;
  margin-left: 20px;
`;
