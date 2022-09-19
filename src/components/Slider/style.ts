import styled from "styled-components";
import { Color } from "ui";

export const StyledSlider = styled.div`
  padding: 0 30px;
  .slick-track {
    margin-top: 20px;
  }
  .slick-arrow.slick-prev {
    z-index: 100;
  }
  .slick-prev:before {
    color: ${Color.Black};
    @media (max-width: 800px) {
      z-index: 1;
    }
  }
  .slick-next:before {
    color: ${Color.Black};
  }
`;
