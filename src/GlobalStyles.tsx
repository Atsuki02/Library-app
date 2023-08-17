import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --main-color: #967824;
}
html {
    font-size: 62.5%;
}
body {
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyles;
