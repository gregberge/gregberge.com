import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "react-europe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="About Greg Bergé" />
      <AboutContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Greg!</SectionTitle>
          <SectionDescription>
            I&#39;m a software engineer based in Paris, who enjoys building
            things.
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>
          <p>
            When I was 12 years old, I created a gaming website which after a
            few months grew big enough to be sold to a company. At 19, I became{' '}
            <strong>R&D engineer</strong> at{' '}
            <a href="https://www.lemonde.fr">Le Monde</a> and lead the CMS
            project of the newspaper group.
          </p>

          <p>
            I joined the founding team of{' '}
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
            conferences. <Link to="/projects">My projects</Link> are trusted by
            thousands of developers.
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
        </AboutText>
      </AboutContainer>
    </>
  )
}
