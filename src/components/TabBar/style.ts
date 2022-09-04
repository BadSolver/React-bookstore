import styled from "styled-components";
import { Color, fonts } from "../../ui";

interface Iprops {
  isActive?: boolean;
}

export const StyledTabBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 50px;
`;

export const TabItem = styled.button<Iprops>`
  ${fonts.Subline}
  color: ${Color.Secondary};
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    color: ${Color.PrimaryDark};
  }

  ${(props) => (props.isActive ? `color: ${Color.PrimaryDark}` : "white")}
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const TabDescription = styled.p`
  padding-bottom: 60px;
  padding-left: 20px;
  ${fonts.Subline}
  font-weight: 400;
`;
export const ContainerDescription = styled.div`
  height: 200px;

  @media (max-width: 576px) {
    height: auto;
  }
`;
