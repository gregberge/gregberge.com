import React from 'react'
import { graphql } from 'gatsby'
import { AppLayout } from '../containers/AppLayout'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero } from '../containers/Hero'
import { LatestArticles } from '../containers/LatestArticles'

export default function IndexPage({ data }) {
  return (
    <AppLayout>
      <Hero />
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Blog</SectionTitle>
        <LatestArticles edges={data.allMdx.edges} />
      </Container>
    </AppLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
