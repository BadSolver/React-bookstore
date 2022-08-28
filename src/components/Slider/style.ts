import styled from "styled-components";

export const StyledSlider = styled.div`
  padding-top: 60px;
  margin: 0 auto;
  .slick-list {
    margin: 0 auto;
    max-width: 1120px;
  }
  .slick-track {
    gap: 60px;
    &:first-child {
      margin-left: 40px;
    }
    @media (max-width:768px) {
      margin-left: 0;
      gap: 10px;
    }
  }
`;
