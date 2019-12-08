import React from 'react'
import styled, { keyframes, th, css, Box } from '@xstyled/styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import humanNumber from 'human-number'
import { FaGithub } from 'react-icons/fa'
import { AppLayout } from '../containers/AppLayout'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
import { ProjectShape } from '../components/Project'
import { Card, CardBody, CardText } from '../components/Card'

const rotateRight = keyframes`
  from {
    transform: rotate(0deg)
               perspective(200px)
               rotateY(2deg)
               translate(0px)
               rotate(0deg);
  }
  to {
    transform: rotate(360deg)
               perspective(200px)
               rotateY(2deg)
               translate(0px) 
               rotate(-360deg);
  }
`

const ProjectImageLink = styled.a`
  display: block;
  position: relative;
  width: 30%;
  padding-top: 3%;

  animation: ${rotateRight} 5s linear infinite;

  > svg {
    position: absolute;
    transition: base;
    top: 0;
    width: 118%;
    height: auto;
  }
`

const ProjectLabel = styled.div`
  font-family: monospace;
  font-size: 13;
  color: accent;
`

const ProjectTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 22;
  color: lighter;
  margin-bottom: 3;
  margin-right: 3;

  > a {
    transition: base;

    &:hover {
      color: accent;
    }
  }
`

const ProjectBody = styled.div`
  position: relative;
  z-index: 1;
  max-width: 70%;
  flex: 0 0 70%;
`

const ProjectTags = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 3;
  font-family: monospace;
`

const Project = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: base;

  ${p => {
    switch (p.position) {
      case 'right':
        return css`
          text-align: left;
          flex-direction: row-reverse;

          ${ProjectLabel}, ${ProjectTitle} {
            margin-left: 3;
          }

          ${ProjectTags} {
            margin-left: 2;
          }

          ${ProjectImageLink} {
            padding-right: 6.5%;
            animation-direction: normal;

            > svg {
              right: 0;
            }
          }

          ${ProjectImageLink}:hover > svg {
            transform: perspective(200px) rotateY(5deg) scale(1.05);
          }
        `
      case 'left':
      default:
        return css`
          text-align: right;
          flex-direction: row;

          ${ProjectLabel}, ${ProjectTitle} {
            margin-right: 3;
          }

          ${ProjectTags} {
            margin-right: 2;
          }

          ${ProjectImageLink} {
            padding-left: 6.5%;
            animation-direction: reverse;

            > svg {
              left: 0;
            }
          }

          ${ProjectImageLink}:hover > svg {
            transform: perspective(200px) rotateY(-5deg) scale(1.05);
          }
        `
    }
  }}
`

const ProjectTag = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-block;
  font-size: 12;
  color: light400;
  padding: 0 2;

  a {
    transition: base;
    color: lighter;

    > svg {
      font-size: 18;
      vertical-align: middle;
    }

    &:hover {
      color: accent;
    }
  }
`

const shine = keyframes`
  0%, 20% { mask-position: -50%; }
  80%, 100% { mask-position: 150%; }
`

const pulse = keyframes`
  0% {
    text-shadow: 0 0 2px ${th.color('accent')};
  }
  
  20%, 60% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  
  80% {
    text-shadow: 0 0 2px ${th.color('accent')};
  }
`

const ShineTag = styled(ProjectTag)`
  cursor: help;
  color: accent;
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: ${shine} 3s linear infinite, ${pulse} 3s infinite;
`

function ProjectDescription({ children }) {
  return (
    <Card>
      <CardBody>
        <CardText>{children}</CardText>
      </CardBody>
    </Card>
  )
}

function ProjectTemplate({
  github,
  npm,
  position,
  label,
  title,
  url,
  description,
  tags,
  color,
  logo,
  stats = true,
}) {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    if (!stats) return
    Promise.all([
      fetch(
        github.replace('https://github.com', 'https://api.github.com/repos'),
      ).then(res => res.json()),
      fetch(
        `https://api.npmjs.org/downloads/point/last-week/${npm}`,
      ).then(res => res.json()),
    ])
      .then(setData)
      .catch(() => {
        // ignore errors
      })
  }, [stats, npm, github])

  const stars = stats && (
    <ShineTag key="stars" title="Number of stars on GitHub">
      ★{' '}
      {data
        ? `${humanNumber(Math.floor(data[0].stargazers_count / 100) * 100)}+`
        : '.'}
    </ShineTag>
  )

  const downloads = stats && (
    <ShineTag key="downloads" title="Number of downloads last week">
      ↓{' '}
      {data
        ? `${humanNumber(Math.floor(data[1].downloads / 1000) * 1000)}+`
        : '.'}
    </ShineTag>
  )

  const ghTag = (
    <ProjectTag key="github">
      <a href={github}>
        <FaGithub />
      </a>
    </ProjectTag>
  )

  return (
    <Project position={position}>
      <ProjectImageLink href={url}>
        <ProjectShape position={position} color={color} />
        <Img fluid={logo} />
      </ProjectImageLink>
      <ProjectBody>
        <ProjectLabel>{label}</ProjectLabel>
        <ProjectTitle>
          <a href={url}>{title}</a>
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTags>
          {position === 'right' && ghTag}
          {position === 'right' && stars}
          {position === 'right' && downloads}
          {tags.map((tag, index) => (
            <ProjectTag key={index}>{tag}</ProjectTag>
          ))}
          {position === 'left' && downloads}
          {position === 'left' && stars}
          {position === 'left' && ghTag}
        </ProjectTags>
      </ProjectBody>
    </Project>
  )
}

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "projects/logo-*" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const logos = data.allFile.edges.reduce((obj, edge) => {
    const [, name] = edge.node.relativePath.match(/^projects\/logo-(.*)\.png$/)
    obj[name] = edge.node.childImageSharp.fluid
    return obj
  }, {})
  const projects = [
    <ProjectTemplate
      logo={logos.svgr}
      label="Integrated in create-react-app"
      title="SVGR"
      npm="@svgr/core"
      github="https://github.com/smooth-code/svgr"
      url="https://www.smooth-code.com/open-source/svgr/"
      color="#FF921B"
      description="SVGR transforms SVG into React Components. You can use it with
      CLI, webpack, rollup, Node.js or even online. It is included
      in create-react-app and has 2M downloads by week."
      tags={['React', 'AST', 'Babel', 'create-react-app']}
    />,

    <ProjectTemplate
      logo={logos['loadable-components']}
      label="Recommended by React Team"
      title="Loadable Components"
      npm="@loadable/component"
      github="https://github.com/smooth-code/loadable-components"
      url="https://www.smooth-code.com/open-source/loadable-components/"
      color="#E7E7E7"
      description="Loadable Components is the Code Splitting solution for React compatible with Server Side Rendering. It is the official library if you don't use a framework like Next.js or Gatsby."
      tags={['React', 'Code Splitting', 'webpack', 'rollup']}
    />,
    <ProjectTemplate
      logo={logos.xstyled}
      label="Design System Toolkit"
      title="xstyled"
      npm="@xstyled/system"
      github="https://github.com/smooth-code/xstyled"
      url="https://www.smooth-code.com/open-source/xstyled/"
      color="#D646AA"
      description="xstyled is an extension to styled-components and emotion. It
              brings theming into CSS language and provides useful utilities
              to help you build a consistent design system."
      tags={['React', 'CSS-in-JS', 'Styled Components', 'emotion']}
    />,
    <ProjectTemplate
      logo={logos['smooth-ui']}
      label="React UI Library"
      title="Smooth UI"
      npm="@smooth-ui/core-sc"
      github="https://github.com/smooth-code/smooth-ui"
      url="https://www.smooth-code.com/open-source/smooth-ui/"
      color="#E00348"
      description="Smooth UI is a simple and powerful UI library for React. It
      provides accessible and ready-to-use components. xstyled and
      Reakit are the foundations of Smooth UI."
      tags={['React', 'UI Library']}
    />,
    <ProjectTemplate
      logo={logos['bundle-analyzer']}
      label="GitHub app"
      title="Bundle Analyzer"
      github="https://github.com/smooth-code/bundle-analyzer"
      url="https://www.bundle-analyzer.com"
      color="#097dea"
      description="Bundle Analyzer is a service that helps you monitor and keep your webpack bundle optimized over time. It is available as a public and free GitHub App."
      tags={['Node.js', 'automation', 'devops']}
      stats={false}
    />,
    <ProjectTemplate
      logo={logos['jest-puppeteer']}
      label="Official Jest Preset"
      title="Jest Puppeteer"
      npm="jest-puppeteer"
      github="https://github.com/smooth-code/jest-puppeteer"
      url="https://github.com/smooth-code/jest-puppeteer"
      color="#FF5600"
      description="Jest Puppeteer unifies Jest and Puppeteer to provide a ready-to-use solution for end-to-end testing. It also exposes lots of utilities to encourage good testing practices."
      tags={['Node.js', 'Jest', 'Puppeteer', 'E2E Testing']}
    />,
    <ProjectTemplate
      logo={logos.shipit}
      label="Universal automation and deployment tool"
      title="Shipit"
      npm="shipit-cli"
      github="https://github.com/shipitjs/shipit"
      url="https://github.com/shipitjs/shipit"
      color="#FBA919"
      description="Shipit provides a good alternative to Capistrano or other build tools. It provides a simple syntax to deploy code on a remote server."
      tags={['Node.js', 'automation', 'devops']}
    />,
  ]
  return (
    <AppLayout>
      <PageContainer>
        <SectionTitle>Projects</SectionTitle>
        <SectionDescription>
          Open source is a real passion and a way of thinking. My tools are used
          and trusted by <strong>thousands of developers</strong> all over the
          world.
        </SectionDescription>
        <Box mt={5} row mb={{ xs: -4, md: -5 }}>
          {projects.map((project, index) => (
            <Box col={1} py={{ xs: 4, md: 5 }} key={index}>
              {React.cloneElement(project, {
                position: index % 2 === 0 ? 'left' : 'right',
              })}
            </Box>
          ))}
        </Box>
      </PageContainer>
    </AppLayout>
  )
}
