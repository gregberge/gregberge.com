import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@xstyled/styled-components'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { AppLayout } from '../containers/AppLayout'

const OutsideContainer = styled.div`
  max-width: 1000;
  margin: 0 auto;
  padding: 8 0 5;
`

const Text = styled.div`
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

const TeaserText = styled.p`
  font-size: 20;
  margin: 0 0 5 0;
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

export function About() {}

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "react-europe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <AppLayout>
      <OutsideContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Greg!</SectionTitle>
          <TeaserText>
            I&#39;m a software engineer based in Paris, who enjoys building
            things.
          </TeaserText>
        </Container>
        <ImageContainer>
          <Shadow />
          <MaskedImg fluid={data.photo.childImageSharp.fluid} />
        </ImageContainer>
        <Container mt={5}>
          <Text>
            <p>
              When I was 12 years old, I created a gaming website which after a
              few months grew big enough to be sold to a company. At 19, I
              became <strong>R&D engineer</strong> at{' '}
              <a href="https://www.lemonde.fr">Le Monde</a> and lead the CMS
              project of the newspaper group.
            </p>

            <p>
              I joined the fouding team of{' '}
              <a href="https://www.doctolib.fr">Doctolib</a> to build the{' '}
              <strong>first medical booking software in Europe</strong>.
            </p>

            <p>
              In 2017, I founded <strong>Smooth Code</strong>, a software
              development studio to help startups like{' '}
              <a href="http://www.payfit.com">Payfit</a>,{' '}
              <a href="https://www.scaleway.com">Scaleway</a> or{' '}
              <a href="https://www.welcometothejungle.com">
                Welcome to the Jungle
              </a>{' '}
              grow.
            </p>

            <p>
              Over the years, I’ve become passionate about open source software
              and sharing with others behind my computer or as a speaker at
              conferences. <Link to="/projects">My projects</Link> are trusted
              by thousands of developers.
            </p>

            <p>
              I am also very active in the training field as I have given
              workshops to more than 400 developers in companies such as{' '}
              <a href="https://www.sncf.com">SNCF</a>,{' '}
              <a href="https://www.alan.com">Alan</a> or{' '}
              <a href="https://www.mappy.com">Mappy</a>.
            </p>

            <p>
              Don&apos;t hesitate to reach out by{' '}
              <a href="mailto:hey@gregberge.com">email</a> or on{' '}
              <a href="https://twitter.com/neoziro">Twitter</a>. I&apos;ll be
              happy to talk!
            </p>
          </Text>
        </Container>
      </OutsideContainer>
    </AppLayout>
  )
}
