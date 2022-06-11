import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  () => css`
    * {
      font-family: Ubuntu, Roboto, Oxygen, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    }

    html,
    body,
    #root {
      min-height: 100%;
      margin: 0;
      padding: 0;
    }
  `
)