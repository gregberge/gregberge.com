import React from 'react'
import { createGlobalStyle, th, Preflight } from '@xstyled/styled-components'

const CustomStyle = createGlobalStyle`
  html, body { 
    margin: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    color: text;
    line-height: 1.4;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    background-color: bg;
  }

  ::selection {
    background-color: light500; 
    color: lighter;
  }

  *:focus {
    outline-color: ${th.color('accent')};
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

export function GlobalStyle() {
  return (
    <>
      <Preflight />
      <CustomStyle />
    </>
  )
}
