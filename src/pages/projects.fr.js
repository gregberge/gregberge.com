import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projets"
      intro={
        <>
          L’Open Source est une vraie passion et un mode de pensée pour moi. Mes
          outils sont utilisés par des <strong>millers de développeurs</strong>{' '}
          dans le monde entier.
        </>
      }
      projects={{
        svgr: {
          label: 'Intégré dans create-react-app',
          description: `SVGR transformes vos SVG en composants React. Vous pouvez l’utiliser via CLI, webpack, rollup, Node.js ou en ligne. Il est inclus dans create-react-app et cumule 2M de téléchargements par semaine.`,
        },
        'loadable-components': {
          label: 'Recommandé par la core team React',
          description: `Loadable Components est la solution de Code Splitting pour React compatible avec le Server Side Rendering. C’est la librairie de référence si vous n’utilisez pas de frameworks comme Next.js ou Gatsby.`,
        },
        xstyled: {
          label: 'Design System Toolkit',
          description: `xstyled est une extension à styled-components et emotion. Il met le theming au coeur du langage CSS et fournis des utilitaires pour vous aider à créer un design system consistant.`,
        },
        'smooth-ui': {
          label: 'React UI Library',
          description: `Smooth UI est une librairie de composants simple et efficace pour React. Elle contient des composants accessibles et prêt à être utilisés. xstyled et Reakit sont les fondations de Smooth UI.`,
        },
        'bundle-analyzer': {
          label: 'GitHub App',
          description: `Bundle Analyzer est un service qui vous permet de monitorer et de garantir les performances votre bundle webpack au cours du temps. Il est disponible gratuitement en tant que GitHub App.`,
        },
        'jest-puppeteer': {
          label: 'Preset Jest officielle',
          description: `Jest Puppeteer lie Jest et Puppeteer pour proposer une solution de end-to-end testing clef en main. Il proposent également des utilitaires pour garantir les bonnes pratiques en manière de test.`,
        },
        shipit: {
          label: 'Outil de déploiement universel',
          description: `Shipit est une alternative à Capistrano ou à d’autre outils similaires. Il expose une syntaxe simple en JavaScript pour déployer du code sur un serveur.`,
        },
      }}
    />
  )
}
