import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --titanic: #1e90ff
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', Helvetica, sans-serif;
}

`;

export default GlobalStyle;
