import styled from "styled-components";
import { Color, fonts } from "ui";
import { StyledButton } from "../Button/style";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-left: 40px;
  background: transparent;
`;
export const Input = styled.input`
  width: 90%;
  padding: 10px 10px;
  border: 1px solid ${Color.Secondary};
  border-radius: 8px;
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  margin-bottom: 50px;
  width: 90%;

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
export const Title = styled.p`
  padding: 10px 20px;
  ${fonts.BodyBold};
  color: ${Color.PrimaryDark};
`;
