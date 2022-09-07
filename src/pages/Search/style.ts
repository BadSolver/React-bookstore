import styled from "styled-components";
import { Color } from "../../ui";

export const StyledSearch = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;

export const Previous = styled.button`
  margin-top: 30px;
  font-size: 21px;
  color: ${Color.Secondary};
  background-color: #fff;
  border: none;
  &:hover {
    color: ${Color.Primary};
  }
`;

export const Next = styled.button`
  margin-top: 30px;
  font-size: 21px;
  color: ${Color.Secondary};
  background-color: #fff;
  border: none;
  &:hover {
    color: ${Color.PrimaryDark};
  }
`;

export const PrevText = styled.span`
  margin-left: 30px;
`;

export const NextText = styled.span`
  margin-right: 30px;
`;
