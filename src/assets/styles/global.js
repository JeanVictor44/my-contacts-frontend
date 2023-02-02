import { createGlobalStyle } from 'styled-components';

export const GLobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background-color:${({theme}) => theme.colors.background};
    color:${({theme}) => theme.colors.gray[900]};
    font-size:16px;
  }

  button {
    cursor:pointer;
  }

`;
