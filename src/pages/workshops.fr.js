import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, {
  up,
  css,
  keyframes,
  Box,
  useColorMode,
} from '@xstyled/styled-components'
import { Seo } from '../containers/Seo'
import { ReviewCard } from '../components/ReviewCard'
import { SectionTitle, SectionDescription } from '../components/Section'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
} from '../components/Card'
import { PageContainer } from '../components/Container'
import { WorkshopForm } from '../containers/WorkshopForm'
import { AdvancedReactLogo } from '../components/AdvancedReactLogo'
import reviews from '../../data/reviews.fr.json'

const clients = [
  {
    name: 'Le Monde',
    slug: 'le-monde',
  },
  {
    name: 'Canal Plus',
    slug: 'canal-plus',
  },
  {
    name: 'Doctolib',
    slug: 'doctolib',
  },
  {
    name: 'Welcome to the Jungle',
    slug: 'welcome-to-the-jungle',
  },
  {
    name: 'Alan',
    slug: 'alan',
  },
  {
    name: 'Scaleway',
    slug: 'scaleway',
  },
  {
    name: 'Sncf',
    slug: 'sncf',
  },
]

const rotation = keyframes`
  from {
    transform: translate(20%, 50%) perspective(200px) rotate(-20deg);
  }

  to {
    transform: translate(20%, 50%) perspective(200px) rotate(-5deg) rotateY(-5deg) scale(0.95);
  }
`

const rotationMd = keyframes`
  from {
    transform: translate(20%, -32%) perspective(200px) rotate(-20deg);
  }

  to {
    transform: translate(20%, -32%) perspective(200px) rotate(-5deg) rotateY(-5deg) scale(0.95);
  }
`

const Logo = styled(AdvancedReactLogo)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: auto;
  transform: translate(20%, 30%);
  animation: ${rotation} 5s ease-in-out infinite;
  animation-direction: alternate-reverse;

  ${up(
    'md',
    css`
      animation-name: ${rotationMd};
    `,
  )}
`

const WorkshopTitle = styled.h2`
  margin: 0;
  font-size: 50;
  color: lighter;
`

const ClientLogoImg = styled(Img)`
  &.mode-dark {
    filter: brightness(0) invert(1);
  }

  &.mode-light {
    filter: brightness(0);
  }
`

function Clients({ clientLogos }) {
  const [colorMode] = useColorMode()

  return (
    <Box row m={-2} justifyContent="space-around">
      {clients.map((client) => {
        const logo = clientLogos.edges.find((edge) =>
          edge.node.relativePath.includes(client.slug),
        )
        return (
          <Box key={client.slug} col="auto" p={2}>
            <ClientLogoImg
              className={`mode-${colorMode}`}
              alt={client.name}
              fixed={logo.node.childImageSharp.fixed}
            />
          </Box>
        )
      })}
    </Box>
  )
}

function Reviews({ avatars }) {
  return (
    <Box row m={-3} my={4} justifyContent="center">
      {reviews.map((review, index) => {
        const edge = avatars.edges.find((edge) =>
          edge.node.relativePath.includes(review.slug),
        )
        return (
          <Box key={index} col={{ xs: 1, md: 1 / 2 }} p={3}>
            <ReviewCard
              review={{ ...review, avatar: edge.node.childImageSharp }}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export default function Workshops() {
  const data = useStaticQuery(graphql`
    query {
      avatars: allFile(filter: { relativePath: { glob: "avatars/*" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      clientLogos: allFile(filter: { relativePath: { glob: "clients/*" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(height: 20) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Formation React Hooks par Greg Bergé" />
      <PageContainer>
        <SectionTitle>Formations</SectionTitle>
        <SectionDescription>
          Une formation accessible à tous pour apprendre à créer et scaler une
          application web <strong>React</strong> en utilisant les{' '}
          <strong>Hooks</strong>.
        </SectionDescription>
        <Card as="section" my={5} overflow="hidden" position="relative">
          <Logo />
          <CardHeader pr="40%">
            <WorkshopTitle>React Hooks</WorkshopTitle>
            <p>Par le créateur de Loadable Components, SVGR & Smooth UI.</p>
          </CardHeader>
          <CardBody>
            <div>
              <CardTitle>Découvrez la puissance des Hooks</CardTitle>
              <p>
                Les Hooks React vous permettent de simplifier votre code et de
                partager de la logique plus simplement que jamais. C’est
                aujourd’hui
                <strong>la méthode recommandée</strong> pour coder vos
                applications React.
              </p>
              <p>
                Je partagerai avec vous mon expériences sur des dizaines de
                projets. Sur des problématiques complexes telles que le
                data-fetching avec <strong>Suspense</strong> et le
                <strong>Code Splitting</strong>. Ce workshop intense de deux
                jours vous permettra d’y voir clair et d’être plus efficace.
              </p>
              <ul>
                <li>Deux journées de workshops intense</li>
                <li>Concepts fondamentaux et avancés de React</li>
                <li>Adapté à tous les niveaux de connaissance</li>
                <li>Supports et exercices inclus</li>
                <li>Du code, beaucoup de code</li>
                <li>Questions / réponses avec moi</li>
              </ul>
            </div>
          </CardBody>
        </Card>
        <Card as="section" my={5}>
          <CardBody>
            <CardTitle>Qu’allez-vous apprendre ?</CardTitle>
            <Box row justifyContent="space-around">
              <Box col={{ xs: 1, md: 'auto' }} as="ul">
                <li>Les bases de React avec les Hooks</li>
                <li>L’histoire des Hooks : motivation, patterns</li>
                <li>Gestion du state partagé (no redux)</li>
                <li>Les limites des Hooks</li>
                <li>Penser “effect” et non “lifecycle”</li>
                <li>Composer et partager la logique</li>
              </Box>
              <Box col={{ xs: 1, md: 'auto' }} as="ul">
                <li>Render-as-You-Fetch avec Suspense</li>
                <li>Optimisation des performances</li>
                <li>Animer son UI à l’aide des Hooks</li>
                <li>Accessibilité et gestion du clavier</li>
                <li>Cas d’usage et utilisation des Refs</li>
                <li>Créer des Hooks réutilisables</li>
              </Box>
            </Box>
          </CardBody>
        </Card>
        <Card as="section" my={5}>
          <CardBody>
            <CardTitle>À qui s’adresse cette formation ?</CardTitle>
            <Box row mx={-3} textAlign="justify" fontSize={15}>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Débutant</h4>
                <p>
                  Si vous avez terminé le tutoriel React, alors vous êtes prêt
                  pour ce workshop. Nous démarrerons avec les fondamentaux de
                  React en y intégrant les Hooks. Les Hooks simplifient beaucoup
                  de choses et rendent React plus accessible aux débutants. Le
                  plus important est d’être confortable avec JavaScript et le
                  développement web plus qu’avec React lui-même.
                </p>
              </Box>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Intermédiaire</h4>
                <p>
                  Si vous avez travaillé avec React en production depuis un
                  moment et que vous souhaitez passer à la vitesse supérieure,
                  c’est l’occasion. Nous allons revoir les bases et explorer des
                  choses que vous ne savez peut-être pas et qui vous
                  simplifieront la vie. Outre les bases, vous apprendrez comment
                  tirer partie des Hooks et organiser votre code pour être plus
                  efficace que jamais. Après ces deux jours, vous aurez une
                  vision claire de la manière d’organiser votre code afin de
                  composer à la fois l’UI et la logique.
                </p>
              </Box>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Expérimenté</h4>
                <p>
                  Si vous êtes déjà très à l’aise avec React, ce workshop vous
                  permettra de découvrir les Hooks et de voir clairement comment
                  faire avancer votre code base. Vous aurez l’occasion
                  d’échanger sur des problématiques et sur les manières de les
                  résoudre de manière élégante. Vous comprendrez quel impact les
                  nouveautés ont sur votre manière de coder au jour le jour et
                  comment vous pourrez en tirer parti pour être plus rapide et
                  plus efficace.
                </p>
              </Box>
            </Box>
            <hr />
            <Reviews avatars={data.avatars} />
          </CardBody>
          <CardFooter>
            <Clients clientLogos={data.clientLogos} />
          </CardFooter>
        </Card>
        <Card as="section" my={5}>
          <CardBody>
            <CardTitle>Réservez une formation pour votre société</CardTitle>
            <WorkshopForm />
          </CardBody>
        </Card>
      </PageContainer>
    </>
  )
}
