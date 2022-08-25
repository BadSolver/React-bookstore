import styled from "styled-components";
import { Color, fonts, Space } from "../../ui";

export const StyledBookItem = styled.div`
  width: 352px;
  margin-bottom: 50px;
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Blue};
  border-radius: 10px;
  margin-bottom: ${Space.Small};
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
export const Cost = styled(Title)``;
