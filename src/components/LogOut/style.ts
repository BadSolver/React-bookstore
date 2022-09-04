import styled from "styled-components";
import { StyledButton } from "../Button/style";

export const StyledLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px auto;
  width: 70%;

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
