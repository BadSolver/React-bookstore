import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-secondary: #313037;
    --color-primaryDark: #5b5a62;
    --color-secondary: #a8a8a8;
    --color-white: #000000;
    --color-gray: #e7e7e7;
    --color-light: #f7f7f7;
    --color-red: #fc857f;
    --color-blue: #a8a8a8;
    --color-green: #caeff0;
    --color-orange: #fee9e2;
    --color-purple: #755e97;
    --color-black: #ffffff;
    --color-dark: #1b1b1d;
  }
  html[theme="light"] {
    --color-secondary: #313037;
    --color-primaryDark: #5b5a62;
    --color-secondary: #a8a8a8;
    --color-white: #ffffff;
    --color-gray: #e7e7e7;
    --color-light: #f7f7f7;
    --color-red: #fc857f;
    --color-blue: #d7e4fd;
    --color-green: #caeff0;
    --color-orange: #fee9e2;
    --color-purple: #f4eefd;
    --color-black: #000000;
    --color-dark: #ffffff;
  }
`;
