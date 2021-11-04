import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  :root {
      --background: #00b8e2;
      --text-title: #363f5f;
      --text-body: #969cb3;
      --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;  
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
`;