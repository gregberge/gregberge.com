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
        'smooth-doc': {
          label: 'Premium Gatsby Theme',
          description: (
            <>
              Smooth DOC is a <strong>premium Gatsby theme</strong>. Create{' '}
              <strong>rich and beautiful documentation</strong> websites with
              almost zero-configuration.
            </>
          ),
        },
        jamtemplates: {
          label: 'Free themes for Gatsby',
          description: (
            <>
              JamTemplates is a showcase of{' '}
              <strong>high quality free Gatsby themes</strong>. Anyone can add a
              theme via a simple pull-request on GitHub.
            </>
          ),
        },
        svgr: {
          label: 'Integrated in create-react-app',
          description: (
            <>
              SVGR transforms SVG into React Components. It is available as{' '}
              <a href="https://react-svgr.com/docs/cli/">CLI</a>,{' '}
              <a href="https://react-svgr.com/docs/webpack/">webpack</a>,{' '}
              <a href="https://react-svgr.com/docs/rollup/">webpack</a>,{' '}
              <a href="https://react-svgr.com/docs/node-api/">Node.js</a> or
              even <a href="https://react-svgr.com/playground/">online</a>. It
              is included in{' '}
              <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs">
                create-react-app
              </a>{' '}
              and has <strong>2M downloads by week</strong>.
            </>
          ),
        },
        'loadable-components': {
          label: 'Recommended by React Team',
          description: (
            <>
              Loadable Components is the <strong>Code Splitting</strong>{' '}
              solution for React compatible with{' '}
              <strong>Server Side Rendering</strong>. It is{' '}
              <strong>the reference library</strong> if you don&apos;t use a
              framework like Next.js or Gatsby.
            </>
          ),
        },
        xstyled: {
          label: 'Design System Toolkit',
          description: (
            <>
              xstyled is an{' '}
              <strong>
                extension to{' '}
                <a href="https://www.styled-components.com/">
                  styled-components
                </a>{' '}
                and <a href="https://emotion.sh/">emotion</a>
              </strong>
              . It brings theming into CSS language and provides useful
              utilities to help building a{' '}
              <strong>consistent design system</strong>.
            </>
          ),
        },
        'smooth-ui': {
          label: 'React UI Library',
          description: (
            <>
              Smooth UI is a simple and powerful{' '}
              <strong>UI library for React</strong>. It provides accessible and
              ready-to-use components.{' '}
              <a href="https://www.smooth-code.com/open-source/xstyled/">
                xstyled
              </a>{' '}
              and <a href="https://reakit.io">Reakit</a> are the foundations of
              Smooth UI.
            </>
          ),
        },
        'bundle-analyzer': {
          label: 'GitHub App',
          description: (
            <>
              Bundle Analyzer is a service that helps{' '}
              <strong>monitoring and keeping a webpack bundle optimized</strong>{' '}
              over time. It is available as a public and free{' '}
              <strong>GitHub App</strong>.
            </>
          ),
        },
        'jest-puppeteer': {
          label: 'Official Jest Preset',
          description: (
            <>
              Jest Puppeteer unifies{' '}
              <strong>
                <a href="https://jestjs.io/">Jest</a> and
                <a href="https://github.com/puppeteer/puppeteer">Puppeteer</a>
              </strong>{' '}
              to provide a ready-to-use solution for{' '}
              <strong>end-to-end testing</strong>. It also exposes lots of
              utilities to encourage <strong>good testing practices</strong>.
            </>
          ),
        },
        shipit: {
          label: 'Universal automation and deployment tool',
          description: (
            <>
              Shipit is an universal <strong>automation</strong> and{' '}
              <strong>deployment</strong> tool. It provides a simple syntax to
              deploy code on a remote server.
            </>
          ),
        },
      }}
    />
  )
}
