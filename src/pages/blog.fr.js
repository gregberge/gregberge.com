import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
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
      <Seo title="Greg Bergé — Blog" />
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          J’écris sur React, JavaScript et partage avec vous les solutions aux
          problèmes que je rencontre. Bonne lecture !
        </SectionDescription>
        <LatestArticles edges={edges} />
      </PageContainer>
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
