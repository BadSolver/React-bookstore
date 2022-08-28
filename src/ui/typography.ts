import { css } from "styled-components";

const H1 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 64px;

  @media (max-width: 568px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

const Subline = css`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

const BodyRegular = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const BodyBold = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const fonts = { H1, H2, H3, Subline, BodyBold, BodyRegular };
