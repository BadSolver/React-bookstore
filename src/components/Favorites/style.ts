import styled from "styled-components";
import { Color, fonts, Space } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledBookItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Color.Secondary};

  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  height: 380px;
  margin-bottom: ${Space.Small};
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 4px 17px rgba(0, 0, 0, 0.5);
  @media (max-width: 1120px) {
    margin: 0 auto;
  }
`;

export const Cost = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  padding-top: 10px;
  padding-left: 10px;
  background: transparent;
  color: black;
`;
export const Link = styled.div``;
export const Description = styled.div`
  ${fonts.Subline}
  max-width: 400px;

  @media (max-width: 1120px) {
    max-width: 800px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
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
  margin: 0;
  width: 130%;
  padding: 15px 15px;

  @media (max-width: 1120px) {
    width: 30%;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media (max-width: 800px) {
    padding: 15px 10px;
    margin-top: 20px;
    width: 80%;
  }
`;
export const SubTitle = styled.div`
  @media (max-width: 1120px) {
    margin-top: 20px;
  }
`;
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
export const Images = styled.img`
  background: transparent;
`;
