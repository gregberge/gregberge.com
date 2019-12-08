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

const IntroText = styled.p`
  font-family: monospace;
  font-size: 16;
  margin: 0;
  color: accent;
`

const Title = styled.h1`
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

const TeaserText = styled.p`
  margin: 4 0;
  font-size: 20;
  max-width: 560;
`

export function Hero() {
  return (
    <PageContainer forwardedAs="section" minHeight="85vh">
      <Dots />
      <MixBackground />
      <Container position="relative">
        <IntroText>Hi, my name is</IntroText>
        <Title>
          <strong>Greg Bergé.</strong>
          <br />I help people make the web great.
        </Title>
        <TeaserText>
          I am a software engineer based in Paris. I create tools and teach how
          to build high quality websites and applications using JavaScript and
          React.
        </TeaserText>
      </Container>
    </PageContainer>
  )
}
