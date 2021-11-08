import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  :root {
      --background: #00b8e2;
      --text-title: #363f5f;
      --text-body: #000;
      --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;  
  }
  html {
    @media (max-width: 1080px) {
      font-size: 75.75%;
    }
    @media (max-width: 720px) {
      font-size: 70.5%;    
    }
  }
`;