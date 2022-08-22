import styled from "styled-components";

export const StyledBooksList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 32px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    gap: 10px;
  }
`;
