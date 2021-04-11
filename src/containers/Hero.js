import React from 'react'
import styled, { up, css } from '@xstyled/styled-components'
import { PageContainer, Container } from '../components/Container'
import dotBg from '../assets/dot-bg.svg'
import heroBg from '../assets/hero.svg'

const Dots = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${dotBg});
  mix-blend-mode: overlay;
  mask-image: linear-gradient(to top, transparent 5%, black 95%),
    linear-gradient(to right, transparent 20%, black 80%);
  mask-composite: exclude;
  -webkit-mask-composite: source-in;
`

const MixBackground = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${heroBg});
  background-size: cover;
  mix-blend-mode: overlay;
  mask-image: linear-gradient(to top, transparent 5%, black 95%),
    linear-gradient(to right, transparent 20%, black 80%);
  mask-composite: exclude;
  -webkit-mask-composite: source-in;
`

export const HeroIntro = styled.p`
  font-family: monospace;
  font-size: 16;
  margin: 0;
  color: accent;
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 40;
  font-weight: 700;

  strong {
    color: lighter;
  }

  ${up(
    'md',
    css`
      font-size: 70;
    `,
  )}
`

export const HeroTeaser = styled.p`
  margin: 4 0;
  font-size: 20;
  max-width: 560;
`

export function Hero({ children }) {
  return (
    <PageContainer as="section" minHeight="85vh">
      <Dots />
      <MixBackground />
      <Container position="relative">{children}</Container>
    </PageContainer>
  )
}
