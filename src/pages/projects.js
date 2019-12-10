import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projects"
      intro={
        <>
          Open source is a real passion and a way of thinking. My tools are used
          and trusted by <strong>thousands of developers</strong> all over the
          world.
        </>
      }
      projects={{
        svgr: {
          label: 'Integrated in create-react-app',
          description: `SVGR transforms SVG into React Components. You can use it with CLI, webpack, rollup, Node.js or even online. It is included in create-react-app and has 2M downloads by week.`,
        },
        'loadable-components': {
          label: 'Recommended by React Team',
          description: `Loadable Components is the Code Splitting solution for React compatible with Server Side Rendering. It is the official library if you don't use a framework like Next.js or Gatsby.`,
        },
        xstyled: {
          label: 'Design System Toolkit',
          description: `xstyled is an extension to styled-components and emotion. It brings theming into CSS language and provides useful utilities to help you build a consistent design system.`,
        },
        'smooth-ui': {
          label: 'React UI Library',
          description: `Smooth UI is a simple and powerful UI library for React. It provides accessible and ready-to-use components. xstyled and Reakit are the foundations of Smooth UI.`,
        },
        'bundle-analyzer': {
          label: 'GitHub App',
          description: `Bundle Analyzer is a service that helps you monitor and keep your webpack bundle optimized over time. It is available as a public and free GitHub App.`,
        },
        'jest-puppeteer': {
          label: 'Official Jest Preset',
          description: `Jest Puppeteer unifies Jest and Puppeteer to provide a ready-to-use solution for end-to-end testing. It also exposes lots of utilities to encourage good testing practices.`,
        },
        shipit: {
          label: 'Universal automation and deployment tool',
          description: `Shipit provides a good alternative to Capistrano or other build tools. It provides a simple syntax to deploy code on a remote server.`,
        },
      }}
    />
  )
}
