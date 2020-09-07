import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projets"
      intro={
        <>
          L’open source est une vraie passion et un mode de pensée. Mes outils
          sont utilisés par des <strong>milliers de développeurs</strong> dans
          le monde entier.
        </>
      }
      projects={{
        'smooth-doc': {
          label: 'Thème Gatsby Premium',
          description: (
            <>
              Smooth DOC permet de créer des documentations de qualité
              professionnelles, le tout avec un minimum de configuration.
            </>
          ),
        },
        jamtemplates: {
          label: 'Collection de thèmes Gatsby',
          description: (
            <>
              JamTemplates est un show-case de{' '}
              <strong>thèmes Gatsby gratuits de haute qualité</strong>. Tout le
              monde peut ajouter un thème via une simple pull-request sur
              GitHub.
            </>
          ),
        },
        svgr: {
          label: 'Intégré dans create-react-app',
          description: (
            <>
              SVGR transforme les <strong>SVG en composants React</strong>. Il
              s’utilise via <a href="https://react-svgr.com/docs/cli/">CLI</a>,{' '}
              <a href="https://react-svgr.com/docs/webpack/">webpack</a>,{' '}
              <a href="https://react-svgr.com/docs/rollup/">rollup</a>,{' '}
              <a href="https://react-svgr.com/docs/node-api/">Node.js</a> ou{' '}
              <a href="https://react-svgr.com/playground/">en ligne</a> et est{' '}
              <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs">
                inclus dans create-react-app
              </a>
              . SVGR cumule <strong>2M de téléchargements par semaine</strong>.
            </>
          ),
        },
        'loadable-components': {
          label: 'Recommandé par la core team React',
          description: (
            <>
              Loadable Components est la solution de{' '}
              <strong>Code Splitting</strong> pour React compatible avec le{' '}
              <strong>Server Side Rendering</strong>. C’est la{' '}
              <strong>librairie de référence</strong> si on n’utilise pas de
              frameworks tel que Next.js ou Gatsby.
            </>
          ),
        },
        xstyled: {
          label: 'Design System Toolkit',
          description: (
            <>
              xstyled est une{' '}
              <strong>
                extension à{' '}
                <a href="https://www.styled-components.com/">
                  styled-components
                </a>{' '}
                et <a href="https://emotion.sh/">emotion</a>
              </strong>
              . Il met le theming au coeur du langage CSS et fournit des
              utilitaires pour aider à la création d’un{' '}
              <strong>design system consistant</strong>.
            </>
          ),
        },
        'smooth-ui': {
          label: 'React UI Library',
          description: (
            <>
              Smooth UI est une <strong>librairie de composants</strong> simple
              et efficace pour React. Elle contient des composants accessibles
              et prêts à être utilisés.{' '}
              <a href="https://www.smooth-code.com/open-source/xstyled/">
                xstyled
              </a>{' '}
              et <a href="https://reakit.io">Reakit</a> sont les fondations de
              Smooth UI.
            </>
          ),
        },
        'bundle-analyzer': {
          label: 'GitHub App',
          description: (
            <>
              Bundle Analyzer est un service qui permet de{' '}
              <strong>
                monitorer et de garantir les performances du bundle webpack
              </strong>{' '}
              au cours du temps. Il est disponible gratuitement en tant que{' '}
              <strong>GitHub App</strong>.
            </>
          ),
        },
        'jest-puppeteer': {
          label: 'Preset Jest officielle',
          description: (
            <>
              Jest Puppeteer lie{' '}
              <strong>
                <a href="https://jestjs.io/">Jest</a> et{' '}
                <a href="https://github.com/puppeteer/puppeteer">Puppeteer</a>
              </strong>{' '}
              pour proposer une solution de <strong>end-to-end testing</strong>{' '}
              clef en main. A l’aide d’utilitaires, Jest Puppeteer garantit les{' '}
              <strong>bonnes pratiques</strong>
              en matière de test.
            </>
          ),
        },
        shipit: {
          label: 'Outil de déploiement universel',
          description: (
            <>
              Shipit est un outil d’<strong>automatisation</strong> et de{' '}
              <strong>déploiement</strong>. Une API simple en JavaScript permet
              de déployer du code sur un serveur.
            </>
          ),
        },
      }}
    />
  )
}
