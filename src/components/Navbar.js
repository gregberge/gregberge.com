import React from 'react'
import styled, { css, up } from '@xstyled/styled-components'
import { Container } from './Container'

export const Nav = styled.nav`
  padding: 5 3;
  margin: 0 auto;
`

export const NavbarBrandLink = styled.a`
  flex: 0 0 auto;
  cursor: pointer;
  transition: base;

  &:hover,
  &:focus {
    color: accent;
  }
`

export const NavbarBrand = styled.h1`
  font-size: 20;
  color: lighter;
  font-weight: 500;
  margin: 0;
`

export const NavbarSecondary = styled.div`
  display: none;

  ${up(
    'md',
    css`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `,
  )}
`

export const NavbarLink = styled.a`
  display: block;
  margin: 0 3;
  font-size: 16;
  font-weight: 500;
  color: lighter;
  transition: base;

  &:focus,
  &:hover {
    color: accent;
  }
`

export function Navbar({ children }) {
  return (
    <Nav>
      <Container
        maxWidth="container-lg"
        display="flex"
        alignItems="center"
        justifyContent={{ xs: 'space-between', md: 'flex-start' }}
      >
        {children}
      </Container>
    </Nav>
  )
}
