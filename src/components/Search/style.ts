import styled from "styled-components";
import { Color, fonts } from "ui";

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
`;
export const Button = styled.button`
  align-self: center;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  background: transparent;
  border: none;
  color: ${Color.Black};
  cursor: pointer;
`;
export const StyledSearch = styled.form`
  display: flex;
  width: 500px;
  margin-left: 20px;
`;
