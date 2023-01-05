import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --purple: hsl(244, 29%, 47%);
    --purple-light: hsl(216, 100%, 97%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);
    --cool-gray: hsl(231, 11%, 65%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', Helvetica, sans-serif;
}

h1 {
    margin-bottom: 0.5rem;
    color: var(--marine-blue);
}
.step-description {
    margin-bottom: 2rem;
    color: var(--cool-gray);
    font-size: 16px;
    font-weight: 400;
}



`;

export default GlobalStyle;
