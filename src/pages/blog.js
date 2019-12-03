import React from 'react'
import { graphql } from 'gatsby'
import { AppLayout } from '../containers/AppLayout'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
import { LatestArticles } from '../containers/LatestArticles'

export default function Blog({ data }) {
  return (
    <AppLayout>
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          I write about React & JavaScript, how to solve real problems. Enjoy
          your time!
        </SectionDescription>
        <LatestArticles edges={data.allMdx.edges} />
      </PageContainer>
    </AppLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
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
