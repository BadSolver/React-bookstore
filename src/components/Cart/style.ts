import styled from "styled-components";
import { Color, fonts } from "ui";
import { StyledButton } from "../Button/style";

export const StyledCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  border: 1px solid ${Color.PrimaryDark};
  border-radius: 10px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  max-width: 400px;
  background: transparent;

  @media (max-width: 800px) {
    justify-content: center;
    max-width: 800px;
  }
`;

export const Title = styled.h1`
  ${fonts.BodyBold}
`;

export const Subtitel = styled.h1`
  ${fonts.BodyRegular}
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Count = styled.div`
  padding: 30px;
`;
export const CostContainer = styled.div`
  align-items: center;
  align-self: center;
  padding-right: 15px;
  width: 60px;
`;
export const Cost = styled.h1`
  ${fonts.BodyBold};
  font-size: 26px;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;
export const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 15px;
  border: none;
  background: transparent;
  color: ${Color.PrimaryDark};
  :hover {
    transition: all 0.5s;
    border: none;
  }
`;
export const ButtonCount = styled(StyledButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;

  @media (max-width: 800px) {
    margin: 0;
  }
`;
export const Images = styled.img`
  background: transparent;
`;
