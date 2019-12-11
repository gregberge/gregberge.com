import React from 'react'
import { AppLayout } from './src/containers/AppLayout'

export const wrapPageElement = ({
  element,
  props: {
    pageContext: { langKey = 'en' },
  },
}) => {
  return <AppLayout langKey={langKey}>{element}</AppLayout>
}
