import styled from "styled-components";
import { fonts, Color } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledSignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  padding: 10px 20px;
  ${fonts.BodyBold};
  color: ${Color.PrimaryDark};
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px 10px;
  border: 1px solid ${Color.Secondary};
  border-radius: 8px;
`;

export const Button = styled(StyledButton)`
  margin: 50px 0;
  width: 90%;

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
