import styled from "styled-components";
import { Color } from "../../ui";

export const StyledSlider = styled.div`
  .slick-arrow.slick-prev {
    z-index: 100;
  }
  .slick-prev:before {
    color: ${Color.Black};
    @media (max-width: 576px) {
      margin-left: 20px;
      z-index: 99999;
    }
  }
  .slick-next:before {
    color: ${Color.Black};
  }
`;
