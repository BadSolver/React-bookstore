import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";
import { Spaces } from "./typography";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
HTML {
    max-width: 100%;
    height: 100vh;
    background-color: ${Colors.White};
}
body {
    margin: 0 auto;
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 1200px;
    color: ${Colors.Primary};
}
#root {
    margin-left: ${Spaces.large};
    margin-right: ${Spaces.large};
}
`;
