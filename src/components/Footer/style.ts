import styled from "styled-components";
import { Space, Color, fonts } from "ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  max-width: 1200px;
  margin-top: ${Space.ExtraLarge};
  border-top: 1px solid ${Color.Gray};

  @media (max-width: 800px) {
    margin-left: ${Space.Large};
    margin-right: ${Space.Large};
  }
`;
export const Description = styled.p`
  padding: 36px 0;
  ${fonts.BodyRegular}
  ${Color.Secondary}
  :first-child {
    text-align: left;
  }
  :last-child {
    text-align: right;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const Title = styled.p`
  color: ${Color.PrimaryDark};
`;
export const Git = styled.div`
  margin-top: 10px;
`;
