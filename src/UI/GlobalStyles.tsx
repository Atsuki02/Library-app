import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --primary-bg-color: linear-gradient(to bottom left, #1a365d, #6366f1, #1a365d);
    --secondary-bg-color: white;
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

export const StyledScreen = styled.div`
  background: var(--primary-bg-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyles;
