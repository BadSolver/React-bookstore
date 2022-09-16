import styled from "styled-components";
import { Color, Space, fonts } from "ui";

export const StyledBookItem = styled.div`
  width: 280px;
  margin: 0 auto;
  
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  margin-bottom: ${Space.Small};
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 4px 17px rgba(0, 0, 0, 0.5);
  
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 226px;
  background: transparent;
`;

export const Title = styled.h3`
  flex-grow: 1;
  margin-bottom: ${Space.ExtraSmall};
  ${fonts.H3}
  ${Color.Primary}
`;
export const SubTitle = styled.p`
  flex-grow: 1;
  margin-bottom: ${Space.Large};
  ${fonts.BodyRegular}
  ${Color.Secondary}
`;
export const Cost = styled(Title)`
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  padding-top: 10px;
  padding-left: 10px;
  background: transparent;
  color: black;
`;
