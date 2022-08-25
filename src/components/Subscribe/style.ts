import styled from "styled-components";
import { fonts, Color } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledSubscribe = styled.div`
  margin-left: 64px;
  margin-right: 64px;
  padding-bottom: 56px;

  @media (max-width: 568px) {
    text-align: left;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Title = styled.h2`
  padding-top: 56px;
  ${fonts.H2}

  @media (max-width: 568px) {
    padding-top: 16px;
  }
`;
export const Subtitle = styled.p`
  ${fonts.Subline}
  font-weight: 400;
  color: ${Color.Secondary};
  padding-top: 10px;

  @media (max-width: 568px) {
    ${fonts.BodyRegular}
  }
`;
export const Input = styled.input`
  display: inline-block;
  flex: 0 1 80%;
  border: none;
  padding: 20px 0px 20px 20px;
  margin: 0;
  outline: none;

  @media (max-width: 568px) {
    padding: 10px 5px;
  }
`;
export const Button = styled(StyledButton)`
  display: inline-block;
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;

  @media (max-width: 568px) {
    padding: 5px 0;
  }
`;
export const Background = styled.div`
  background: ${Color.Purple};
  margin-top: 56px;
`;
export const InputContainer = styled.form`
  display: flex;
  padding-top: 32px;

  @media (max-width: 568px) {
    flex-direction: column;
    gap: 20px;
  }
`;
