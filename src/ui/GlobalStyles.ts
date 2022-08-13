import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

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
    padding: 0;
    margin: 0 auto;
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 1120px;
    color: ${Colors.Primary};
}
`