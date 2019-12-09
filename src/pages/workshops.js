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
import { AppLayout } from '../containers/AppLayout'
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

const reviews = [
  {
    name: 'Sonia Baibou',
    jobTitle: 'Développeuse, fondatrice de Ellecode',
    slug: 'sonia-baibou',
    linkType: 'twitter',
    url: 'https://twitter.com/ellecode_/status/976552344279244800',
    text:
      '3 jours de formation #reactjs avec @smooth_code et THE expert @neoziro. Très intense, plein de bons conseils pour démarrer, les bonnes pratiques et y voir plus clair parmi la multitude de libs disponibles, je recommande à 100% pour tous ceux qui veulent démarrer #reactjs #React👏',
  },
  {
    name: 'Emmanuel Barachan',
    jobTitle: 'Développeur chez Scaleway',
    slug: 'emmanuel-barachan',
    linkType: null,
    url: null,
    text:
      'Équipe chaleureuse, ils savent de quoi ils parlent ! La formation React avancé m’a ouvert les yeux sur mes lacunes, je recommande vivement.',
  },
  {
    name: 'Ludovic Zamord',
    jobTitle: 'Développeur chez Fullsix Group',
    slug: 'ludovic-zamord',
    linkType: 'linkedin',
    url: 'https://www.linkedin.com/in/lzamord',
    text:
      'Très bonne formation React Avancé fournie par Greg, je la recommande vivement, lorsque l’on souhaite aborder des sujets un peu plus poussés et les bonnes pratiques a mettre en place en React.',
  },
  {
    name: 'Vianney Stroebel',
    jobTitle: 'Développeur chez Scaleway',
    slug: 'vianney-strobel',
    linkType: 'linkedin',
    url: 'https://fr.linkedin.com/in/vianneystroebel',
    text:
      'Une formation "React niveau avancé" très complète prodiguée par un expert qui a répondu à toutes nos questions avec nuance.',
  },
  {
    name: 'Jeremy Robert',
    jobTitle: 'Développeur chez Veolia',
    slug: 'jeremy-robert',
    linkType: 'linkedin',
    url: 'https://fr.linkedin.com/in/j%C3%A9r%C3%A9my-robert-9987b8a8',
    text:
      'Formation au top, Greg est très pédagogue et possède un excellent niveau technique. Il prend le temps de nous expliquer si on se sent perdu à un moment donné. Je recommande chaudement.',
  },
  {
    name: 'David Poulin',
    jobTitle: 'Architecte Indépendant DevOps, Cloud & Mobilité',
    slug: 'david-poulin',
    linkType: 'linkedin',
    url: 'https://fr.linkedin.com/in/dapoulin',
    text:
      "J'ai passé 3 jours avec eux dans des locaux vraiment sympas, et j'ai vraiment trop apprécié ! Greg est génial, prend le temps d'écouter, d'expliquer, de comprendre, je ne peux que les recommander si vous souhaitez vous mettre à jour sur React, GraphQL & compagnie !",
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
      {clients.map(client => {
        const logo = clientLogos.edges.find(edge =>
          edge.node.relativePath.includes(client.slug),
        )
        return (
          <Box col="auto" p={2}>
            <ClientLogoImg
              key={client.slug}
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
    <Box row m={-3} my={4}>
      {reviews.map((review, index) => {
        const edge = avatars.edges.find(edge =>
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
    <AppLayout>
      <PageContainer>
        <SectionTitle>Workshops</SectionTitle>
        <SectionDescription>
          A workshop for everyone to learn how to build and scale a{' '}
          <strong>React</strong> application using <strong>Hooks</strong>.
        </SectionDescription>
        <Card
          forwardedAs="section"
          my={5}
          overflow="hidden"
          position="relative"
        >
          <Logo />
          <CardHeader pr="40%">
            <WorkshopTitle>Advanced React</WorkshopTitle>
            <p>From the creator of Loadable Components, SVGR & Smooth UI.</p>
          </CardHeader>
          <CardBody>
            <div>
              <CardTitle>Discover the power of React Hooks</CardTitle>
              <p>
                React Hooks makes your code simpler and improves the sharing
                logic between your components. It is{' '}
                <strong>the new recommended way</strong> of coding React
                applications.
              </p>
              <p>
                I will share with you my experience on a dozen of projects and
                complex problematics like data-fetching with{' '}
                <strong>Suspense</strong> and <strong>Code Splitting</strong>.
                This two-day workshop will give you keys to start and to be
                powerful.
              </p>
              <ul>
                <li>Two days of intense workshop</li>
                <li>Fundamental & Advanced React concepts</li>
                <li>Adapted for everyone</li>
                <li>Courses & exercises included</li>
                <li>Some code, lots of code!</li>
                <li>Q/A session with me</li>
              </ul>
            </div>
          </CardBody>
        </Card>
        <Card forwardedAs="section" my={5}>
          <CardBody>
            <CardTitle>What will you learn?</CardTitle>
            <Box row justifyContent="space-around">
              <Box col={{ xs: 1, md: 'auto' }} as="ul">
                <li>Fundamentals of React with Hooks</li>
                <li>Story of Hooks: motivation, patterns</li>
                <li>State management (avoid redux)</li>
                <li>Limits of Hooks</li>
                <li>Think &quot;effect&quot;, not &quot;lifecycle&quot;</li>
                <li>Compose and share logic</li>
              </Box>
              <Box col={{ xs: 1, md: 'auto' }} as="ul">
                <li>Render-as-You-Fetch with Suspense</li>
                <li>Performances optimization</li>
                <li>Animate your UI with Hooks</li>
                <li>Accessibility and keyboard handling</li>
                <li>Use-case and usage of Refs</li>
                <li>Create composable and reusable Hooks</li>
              </Box>
            </Box>
          </CardBody>
        </Card>
        <Card forwardedAs="section" my={5}>
          <CardBody>
            <CardTitle>Who should attend?</CardTitle>
            <Box row mx={-3} textAlign="justify" fontSize={15}>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Beginners</h4>
                <p>
                  If you have finished the React tutorial, then you are ready
                  for this workshop. We will start with React fundamentals using
                  Hooks. Hooks simplifies things and makes React more accessible
                  to beginners. The most important is to be comfortable with
                  JavaScript and web-development itself.
                </p>
              </Box>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Intermediate</h4>
                <p>
                  If you have been working with React in production for a while
                  and want to level-up, this workshop is perfect. We will start
                  from basics and explore new things that will make your
                  developer life simpler. Aside from basics, you will learn how
                  to organize your code, scale your application and be more
                  efficient than ever. After these two days, you will have a
                  clear view on how to compose UI and reuse your code.
                </p>
              </Box>
              <Box px={3} col={{ xs: 1, md: 1 / 3 }}>
                <h4>Experienced</h4>
                <p>
                  If you are already good with React, this workshop will make
                  you discover Hooks and how to move forward your codebase. You
                  will be able to exchange on complex problematics and I will
                  give you the keys to solve them the best way you can. You will
                  also learn how React is moving, the new features and the
                  philosophy behind them. You will be able to teach your team at
                  the end of the workshop.
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
        <Card forwardedAs="section" my={5}>
          <CardBody>
            <CardTitle>Book a training for your company</CardTitle>
            <WorkshopForm />
          </CardBody>
        </Card>
      </PageContainer>
    </AppLayout>
  )
}
