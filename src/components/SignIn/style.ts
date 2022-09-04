import styled from "styled-components";
import { Color, fonts } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledSignIn = styled.form`
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
  padding: 8px 10px;
  border: 1px solid ${Color.Secondary};
  border-radius: 8px;
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 90%;
  :hover {
    background-color: white;
    color: black;
    border: 0.1px solid black;
  }

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;

export const ErrorMessage = styled.p`
  padding-top: 10px;
  color: ${Color.Red};
  text-transform: uppercase;
`;

export const ForgotPassword = styled.p`
  ${fonts.BodyBold}
  padding-top: 15px;
  cursor: pointer;
`;
