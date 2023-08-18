import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --primary-bg-color: #967824;
    --secondary-bg-color: #f0cd6c;
    --primary-color: white;
    --secondary-color: white;
    --primary-text-color: white;
    --secondary-text-color: black;
}
html {
    font-size: 62.5%;
}
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyles;
