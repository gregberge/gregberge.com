import React from 'react'
import { I18nProvider } from './src/components/I18nContext'

export function wrapPageElement({ element, props: { pageContext } }) {
  return <I18nProvider langKey={pageContext.langKey}>{element}</I18nProvider>
}
