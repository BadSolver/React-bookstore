import styled from "styled-components";

export const StyledSlider = styled.div`
  .slick-prev:before {
    z-index: 99;
    color: black;
    @media (max-width: 576px) {
      margin-left: 20px;
    }
  }
  .slick-next:before {
    color: black;
    @media (max-width: 576px) {
      margin-right: 20px;
    }
  }
`;
