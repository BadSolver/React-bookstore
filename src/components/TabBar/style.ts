import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledTabBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 50px;
`;

export const TabItem = styled.button`
  ${fonts.Subline}
  color: ${Color.Secondary};
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    color: ${Color.PrimaryDark};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;
`;
export const TabDescription = styled.p`
  padding-bottom: 60px;
  padding-left: 20px;
  ${fonts.Subline}
  font-weight: 400;
`;
export const ContainerDescription = styled.div`
  height: 300px;
`;
