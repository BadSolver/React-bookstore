import styled from "styled-components";
import { fonts } from "../../ui";

export const StyledTitleFavorites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  ${fonts.H1}
`;
export const StyledFavorites = styled.div``;

export const ButtonScroll = styled.button`
  position: fixed;
  top: 600px;
  left: 100px;
  background: black;
  border-radius: 50%;
  color: white;
  padding: 10px 20px;

`