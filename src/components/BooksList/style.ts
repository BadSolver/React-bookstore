import styled from "styled-components";

export const StyledBooksList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-radius: 10px;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 970px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`;
