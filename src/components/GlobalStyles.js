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
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: hsl(226, 43%, 10%);
        color:  white;
        padding: 100px 10%;

    }

    h3{
        font-size: 18px;
        font-weight: 400;
    }
    p{
        font-size: 14px;
    }
    
`;

export default GlobalStyles;
