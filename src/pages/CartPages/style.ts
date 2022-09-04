import styled from "styled-components";
import { StyledButton } from "../../components/Button/style";
import { fonts } from "../../ui";

export const StyledCartPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${fonts.H1}
`;
export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  margin-top: 30px;
  padding: 0;
  width: 200px;
  height: 60px;
  ${fonts.BodyRegular}
  :hover {
    background-color: white;
    color: black;
    border: .1px solid black;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
