import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
} from '../components/Layout'
import { GlobalStyle } from '../components/GlobalStyle'
import { ThemeInitializer } from '../components/Theme'
import { I18nProvider } from '../components/I18nContext'
import { AppNavbar } from './AppNavbar'
import { AppFooter } from './AppFooter'
import { Newsletter } from './Newsletter'

export function AppLayout({ children, langKey }) {
  return (
    <I18nProvider langKey={langKey}>
      <ThemeInitializer>
        <Helmet>
          <html lang={langKey} />
        </Helmet>
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
    </I18nProvider>
  )
}
