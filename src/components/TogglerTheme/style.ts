import styled from "styled-components";
import { Color } from "ui";

interface IButtonTheme {
  title: string;
}

export const StyledToggler = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background: transparent;
    margin-right: 160px;
  }
`;

export const ButtonTheme = styled.button<IButtonTheme>`
  background: black;
  color: white;
  border-color: white;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${({ title }) => (title ? `${Color.Black} ` : "white")};
  border-radius: 10px;
  color: ${({ title }) => title && `${Color.Black}`};
`;
