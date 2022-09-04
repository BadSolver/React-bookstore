import styled from "styled-components";
import { Color, fonts } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 210px;
  border: 1px solid ${Color.PrimaryDark};
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 400px;
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
export const CostContainer = styled.h1`
  align-items: center;
  align-self: center;
  padding-right: 15px;
  width: 60px;
`;
export const Cost = styled.h1`
  ${fonts.BodyRegular}
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
`;
export const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 15px;
  background: transparent;
  color: ${Color.PrimaryDark};
`;
export const ButtonCount = styled(StyledButton)`
  display: block;
  margin: 0;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
`;
