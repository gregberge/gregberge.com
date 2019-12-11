import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import React from 'react'
import { AppLayout } from './src/containers/AppLayout'

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents([getColorModeInitScriptElement()])
}

export const wrapPageElement = ({
  element,
  props: {
    pageContext: { langKey = 'en' },
  },
}) => {
  return <AppLayout langKey={langKey}>{element}</AppLayout>
}
