import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero, HeroIntro, HeroTitle, HeroTeaser } from '../containers/Hero'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'

export default function IndexPage({ data }) {
  const edges = data.en.edges.map((enEdge) => {
    const frEdge = data.fr.edges.find(
      (frEdge) => frEdge.node.frontmatter.slug === enEdge.node.frontmatter.slug,
    )
    return frEdge || enEdge
  })
  return (
    <>
      <Seo />
      <Hero>
        <HeroIntro>Bonjour, je m’appelle</HeroIntro>
        <HeroTitle>
          <strong>Greg Bergé.</strong>
          <br />
          Je suis passionné par le web.
        </HeroTitle>
        <HeroTeaser>
          Je suis un ingénieur basé à Paris. Je réalise et enseigne comment
          créer des sites webs et des applications de haute qualité en utilisant
          React et JavaScript.
        </HeroTeaser>
      </Hero>
      <Container as="section" pb={5}>
        <SectionTitle as="h2">Blog</SectionTitle>
        <LatestArticles edges={edges} />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($langKey: String!) {
    fr: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: $langKey } }
      }
    ) {
      ...ConnectionFields
    }

    en: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: "en" } }
      }
    ) {
      ...ConnectionFields
    }
  }

  fragment ConnectionFields on MdxConnection {
    edges {
      node {
        excerpt(pruneLength: 190)
        id
        fields {
          link
        }
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
