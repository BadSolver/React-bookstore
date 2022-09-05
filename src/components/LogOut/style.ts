import styled from "styled-components";
import { StyledButton } from "../Button/style";

export const StyledLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(StyledButton)`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 60%;

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
