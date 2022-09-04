import styled from "styled-components";
import { Color, fonts, Space } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledBookItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Color.Secondary};
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
  margin-bottom: ${Space.Small};
  background-color: ${Color.Blue};
  border-radius: 10px;
  box-shadow: 10px 10px 5px ${Color.Orange};
`;

export const Cost = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  padding-top: 10px;
  padding-left: 10px;
`;
export const Link = styled.div``;
export const Description = styled.div`
  ${fonts.Subline}
  max-width: 400px;
`;
export const Title = styled.h1`
  ${fonts.H1}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const RateWithBuy = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  width: 100%;
  padding: 15px 15px;
  border: 1px solid black;
  ${fonts.BodyRegular}
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
    margin-top: 20px;
    width: 80%;
  }
`;
export const SubTitle = styled.div``;
export const ButtonDeleteBook = styled(StyledButton)`
  display: block;
  margin: 0;
  padding: 0;
  background: transparent;
  color: ${Color.PrimaryDark};
  outline: none;
  border: none;
  :hover {
    border: none;
    background: none;
  }
`;
