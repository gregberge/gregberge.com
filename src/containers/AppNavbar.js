import React from 'react'
import { Link } from 'gatsby'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandLink,
  NavbarSecondary,
  NavbarLink,
} from '../components/Navbar'

export function AppNavbar() {
  return (
    <Navbar>
      <NavbarBrandLink as={Link} to="/">
        <NavbarBrand>Greg Bergé</NavbarBrand>
      </NavbarBrandLink>
      <NavbarSecondary>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/blog">
          Blog
        </NavbarLink>
        <NavbarLink as={Link} to="/projects">
          Projects
        </NavbarLink>
      </NavbarSecondary>
    </Navbar>
  )
}
