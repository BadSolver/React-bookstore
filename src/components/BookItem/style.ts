import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { fonts, Spaces } from "../../ui/typography";

export const StyledBookItem = styled.div`
  width: 352px;
  margin-bottom: 50px;
`;
export const ItemBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Colors.Blue};
  border-radius: 10px;
  margin-bottom: ${Spaces.small};
`;

export const Title = styled.h3`
  ${fonts.H3}
  flex-grow: 1;
  ${Colors.Primary}
  margin-bottom: ${Spaces.extraSmall};
`;
export const SubTitle = styled.p`
  ${fonts.BodyRegular}
  ${Colors.Secondary}
    margin-bottom: ${Spaces.large};
    flex-grow:1;
`;
export const Cost = styled(Title)`
  
`;
