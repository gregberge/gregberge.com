import React from 'react'
import styled from '@xstyled/styled-components'
import { PageContainer } from '../components/Container'
import { SectionDescription } from '../components/Section'

const Title = styled.h1`
  color: lighter;
  margin: 2 0;
`

export default function NotFound() {
  return (
    <PageContainer style={{ textAlign: 'center' }}>
      <Title>Page not found</Title>
      <SectionDescription>
        We couldn’t find what you were looking for... <br />
        You should leave this page as soon as possible 😰.
      </SectionDescription>
      <div>
        <a href="https://dribbble.com/shots/2402048-Kylo-is-waiting">
          <img
            alt="Kylo is waiting"
            src="https://cdn.dribbble.com/users/469578/screenshots/2402048/star_wars_kyloren_ren.gif"
            style={{ width: '100%' }}
          />
        </a>
      </div>
    </PageContainer>
  )
}
