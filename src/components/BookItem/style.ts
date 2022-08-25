import styled from "styled-components";
import { Color, Space, fonts } from "../../ui";

export const StyledBookItem = styled.div`
  width: 280px;
  margin-bottom: 50px;
  
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Blue};
  height: 320px;
  border-radius: 10px;
  margin-bottom: ${Space.Small};
  box-shadow: 10px  10px 5px${Color.Orange};
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 226px;
`;

export const Title = styled.h3`
  ${fonts.H3}
  flex-grow: 1;
  ${Color.Primary}
  margin-bottom: ${Space.ExtraSmall};
`;
export const SubTitle = styled.p`
  ${fonts.BodyRegular}
  ${Color.Secondary}
    margin-bottom: ${Space.Large};
  flex-grow: 1;
`;
export const Cost = styled(Title)`
display: flex;
align-items: flex-end;
align-self: flex-start;
flex-grow: 1;
padding-top: 10px;
padding-left: 10px;
`;
