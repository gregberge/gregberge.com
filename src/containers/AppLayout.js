import React from 'react'
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
} from '../components/Layout'
import { GlobalStyle } from '../components/GlobalStyle'
import { ThemeInitializer } from '../components/Theme'
import { AppNavbar } from './AppNavbar'
import { AppFooter } from './AppFooter'
import { Newsletter } from './Newsletter'

export function AppLayout({ children }) {
  return (
    <ThemeInitializer>
      <Layout>
        <GlobalStyle />
        <LayoutHeader>
          <AppNavbar />
        </LayoutHeader>
        <LayoutMain>{children}</LayoutMain>
        <LayoutFooter>
          <Newsletter />
          <AppFooter />
        </LayoutFooter>
      </Layout>
    </ThemeInitializer>
  )
}
