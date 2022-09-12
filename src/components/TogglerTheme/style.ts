import styled from "styled-components";

export const StyledToggler = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background: transparent;
    margin-right: 160px;
  }
`;

export const ButtonTheme = styled.button`
  background: black;
  color: white;
  border-color: white;

  &:first-child {
    margin-left: 10px;
    padding: 10px 20px;
    color: white;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 10px;
  }
  &:last-child {
    padding: 10px 20px;
    margin-right: 20px;
    border: 1px solid #1b1b1d;
    color: #1b1b1d;
    background: transparent;
    border-radius: 10px;
  }
`;
