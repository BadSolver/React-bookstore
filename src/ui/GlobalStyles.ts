import { createGlobalStyle } from "styled-components";
import { Color } from "./color";
import { Space } from "./space";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height:100%;
    margin: 0 auto;
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 1200px;
    color: ${Color.Primary};
}

#root {
    margin-left: ${Space.Large};
    margin-right: ${Space.Large};
}
`;
