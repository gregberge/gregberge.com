import React from 'react'
import { graphql } from 'gatsby'
import { AppLayout } from '../containers/AppLayout'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
import { LatestArticles } from '../containers/LatestArticles'

export default function IndexPage({ data }) {
  const edges = data.en.edges.map(enEdge => {
    const frEdge = data.fr.edges.find(
      frEdge => frEdge.node.frontmatter.slug === enEdge.node.frontmatter.slug,
    )
    return frEdge || enEdge
  })
  return (
    <AppLayout>
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          J’écris sur React, JavaScript et comment résoudre des problèmes réels.
          Bonne lecture !
        </SectionDescription>
        <LatestArticles edges={edges} />
      </PageContainer>
    </AppLayout>
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
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
