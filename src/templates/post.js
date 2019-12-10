import React from 'react'
import { graphql } from 'gatsby'
import styled, { up, css, th } from '@xstyled/styled-components'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Img from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import Markdown from 'react-markdown'
import { Location } from '@reach/router'
import { PageContainer } from '../components/Container'
import { Code } from '../components/Code'
import { Share } from '../components/Share'
import { AppLayout } from '../containers/AppLayout'
import { Seo } from '../containers/Seo'

export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍳')
      .join('')} ${minutes} min read`
  }
  return `${new Array(cups || 1).fill('🥐').join('')} ${minutes} min read`
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean)
  return date.toLocaleDateString(...args)
}

const components = {
  code: ({ children, className, ...props }) => {
    const lang = className && className.split('-')[1]
    return (
      <Code lang={lang} {...props}>
        {children}
      </Code>
    )
  },
}

const Article = styled.article`
  font-size: 18;
  line-height: 1.6;

  .metadata {
    font-size: 15;
    display: flex;
    justify-content: center;

    time {
      &:after {
        content: '-';
        margin: 0 2;
      }
    }
  }

  pre {
    font-family: monospace;
  }

  code {
    font-family: monospace;
    color: lighter;
  }

  figure {
    margin: 5 -4;

    .gatsby-image-wrapper {
      box-shadow: 0 20px 50px ${th.color('shadow-dark')};

      ${up(
        'md',
        css`
          border-radius: 20;
        `,
      )}
    }
  }

  figcaption {
    margin: 2;
    font-size: 16;
    text-align: center;
    color: light400;
  }

  dl,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  p,
  pre,
  ul {
    width: 100%;
    word-wrap: break-word;
  }

  h1 {
    margin: 0;
    font-size: 44;
    line-height: 1.1;
    text-align: center;
    font-weight: 500;
    color: lighter;

    ${up(
      'md',
      css`
        font-size: 70;
      `,
    )}
  }

  h2 {
    font-size: 28;
    font-weight: 500;
    color: lighter;
    margin: 5 0 2;
  }

  h3 {
    font-size: 24;
    font-weight: 500;
    color: lighter;
    margin: 4 0 2;
  }

  h4 {
    font-size: 20;
    font-weight: 500;
    margin: 4 0 2;
  }

  li,
  p {
    margin: 3 0;
    text-align: justify;
  }

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

  blockquote {
    margin: 6 3;
    text-align: center;
    font-size: 28;
    line-height: 38rpx;
    font-style: italic;
    quotes: '“' '”';
  }

  blockquote:before {
    color: accent;
    content: open-quote;
    font-size: 70;
    line-height: 0;
    margin-left: -22;
    vertical-align: -28;
  }

  blockquote p {
    display: inline;
  }

  .gatsby-resp-image-link {
    border-bottom: 0;
  }

  .gatsby-resp-image-background-image {
    display: none !important;
  }

  img {
    max-width: 100%;
    margin: 4 auto;
  }

  .top-img img {
    margin: 0;
    max-width: auto;
  }

  ${up(
    'md',
    css`
      font-size: 21;
    `,
  )};
`

export default function Post({ data }) {
  const { frontmatter, body } = data.mdx

  return (
    <AppLayout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.banner.childImageSharp.social.src}
        datePublished={frontmatter.date}
        isBlogPost
      />
      <MDXProvider components={components}>
        <PageContainer>
          <Article>
            <h1>{frontmatter.title}</h1>
            <section className="metadata">
              <time dateTime={frontmatter.date}>
                {formatPostDate(frontmatter.date, 'en')}
              </time>
              <span>{formatReadingTime(data.mdx.timeToRead)}</span>
            </section>
            <figure className="top-img">
              <Img fluid={frontmatter.banner.childImageSharp.fluid} />
              <Markdown renderers={{ paragraph: 'figcaption' }}>
                {frontmatter.bannerCredit}
              </Markdown>
            </figure>
            <Markdown>{frontmatter.description}</Markdown>
            <MDXRenderer>{body}</MDXRenderer>
          </Article>
          <Location>
            {({ location }) => (
              <Share
                url={`${data.site.siteMetadata.canonicalUrl}${location.pathname}`}
                title={frontmatter.title}
              />
            )}
          </Location>
        </PageContainer>
      </MDXProvider>
    </AppLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        canonicalUrl
      }
    }

    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        description
        author
        slug
        date
        banner {
          childImageSharp {
            social: fixed(width: 1280, height: 640) {
              src
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerCredit
        slug
      }
    }
  }
`
