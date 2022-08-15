import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --orange-200: #FF8F49;
    --orange-500: #FF6500;
    --orange-600: #E35214;

    --blue-300: #347BBE;
    --blue-400: #355eae;
    --blue-500: #0060B1;
    --blue-800: #022448;

    --gray-50: #FAFAFB;
    --gray-100: #F2F3F4;
    --gray-200: #F0EEEE;
    --gray-500: #DEE0E4;
    --gray-600: #7F858D;
    --gray-700: #565C69;
    --gray-800: #42464D;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    -webkit-font-smoothing: antialised;
    background-color: var(--blue-800);
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button{
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    background-color: transparent;

    &:hover {
      filter: brightness(1.1);
    }
  }
`
