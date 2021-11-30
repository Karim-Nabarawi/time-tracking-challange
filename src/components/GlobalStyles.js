import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body {
        font-family: 'Rubik', sans-serif;
        width: 100%;
        background-color: hsl(226, 43%, 10%);
        color:  white;
        padding: 100px 10%;

    }
    html, body, #root {
        height: 100%;
    }

    h3{
        font-size: 18px;
        font-weight: 500;
    }
    h1{
        font-weight: 400;
        font-size: 56px;
    }
    p{
        font-size: 14px;
        font-weight: 300;
    }
    .app {
        height: 100%;
    }
    
`;

export default GlobalStyles;
