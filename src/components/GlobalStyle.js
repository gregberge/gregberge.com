import { createGlobalStyle } from '@xstyled/styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html, body { 
    margin: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    color: text;
    line-height: 1.4;
  }

  body {
    background-color: bg;
  }


  ::selection {
    background-color: light800; 
    color: lighter;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-family: sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [type="search"] {
    appearance: none;
  }
`
