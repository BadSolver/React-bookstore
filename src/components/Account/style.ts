import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledAccount = styled.div`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 20px;
  border: 1px solid ${Color.Secondary};
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${fonts.H2}
  padding-top: 20px;
  padding-left: 30px;
`;
export const Description = styled.div`
  padding-left: 30px;
`;

export const SubTitle = styled.p`
  padding: 10px 5px;
  padding-left: 30px;
`;

export const BoldSubtitle = styled.p`
  ${fonts.H3}
  color: ${Color.PrimaryDark}
`;
