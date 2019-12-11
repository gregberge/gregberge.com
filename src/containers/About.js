import React from 'react'
import Img from 'gatsby-image'
import styled, { up, css } from '@xstyled/styled-components'
import { Container } from '../components/Container'

export const AboutContainer = styled.div`
  max-width: 1000;
  margin: 0 auto;
  padding: 120 0 5;

  ${up(
    'md',
    css`
      padding-top: 8;
    `,
  )}
`

export const AboutText = styled(Container)`
  margin-top: 5;

  p {
    font-size: 18;
    line-height: 1.6;
    text-align: justify;

    a {
      transition: base;
      color: lighter;
      border-bottom: 1px dotted;
      border-bottom-color: lighter;

      &:hover {
        color: accent;
        border-bottom-color: accent;
      }
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
`

const MaskedImg = styled(Img)`
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 30%,
    black 70%,
    transparent 100%
  );
`

const Shadow = styled.div`
  position: absolute;
  top: -30;
  right: 50;
  bottom: -30;
  left: 50;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #000000 0%,
    rgba(0, 0, 0, 0) 100%
  );
`

export function AboutImage({ img }) {
  return (
    <ImageContainer>
      <Shadow />
      <MaskedImg fluid={img.fluid} />
    </ImageContainer>
  )
}
