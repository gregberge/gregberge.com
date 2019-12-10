import React from 'react'
import { Link } from 'gatsby'

const I18nContext = React.createContext('en')

export function I18nProvider({ langKey, children }) {
  return <I18nContext.Provider value={langKey}>{children}</I18nContext.Provider>
}

export function useLangKey() {
  return React.useContext(I18nContext)
}

export function I18nLink(props) {
  const langKey = useLangKey()
  if (langKey === 'en') return <Link {...props} />
  return <Link {...props} to={`/${langKey}/${props.to}`} />
}
