import styled from "styled-components";
import { Color, fonts } from "../../ui";
import { StyledButton } from "../Button/style";

export const StyledModalWindow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 20px;
  border: 1px solid ${Color.Secondary};
  border-radius: 10px;
  background: ${Color.White};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${fonts.H3}
  padding: 10px;
  padding-top: 30px;
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0;
  padding: 10px 10px;
  width: 60%;
  margin: 20px auto;

  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;
