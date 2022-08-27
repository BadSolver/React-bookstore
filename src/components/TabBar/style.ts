import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledTabBar = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TabItem = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  ${fonts.Subline}
  color: ${Color.Secondary};

  &:focus {
    color: ${Color.PrimaryDark};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;
`;
export const TabDescription = styled.p`
  ${fonts.Subline}
  font-weight: 400;
  padding-bottom: 60px;
  padding-left: 20px;
`;
export const ContainerDescription = styled.div`
  height: 300px;
`;
