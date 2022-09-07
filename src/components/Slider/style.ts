import styled from "styled-components";
import { Color } from "../../ui";

export const StyledSlider = styled.div`
  .slick-prev:before {
    z-index: 99;
    color: ${Color.Black};
    @media (max-width: 576px) {
      margin-left: 20px;
    }
  }
  .slick-next:before {
    color: ${Color.Black};
    @media (max-width: 576px) {
      margin-right: 20px;
    }
  }
`;
