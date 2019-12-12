import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { I18nLink } from '../components/I18nContext'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "react-europe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="A propos de Greg Bergé" />
      <AboutContainer>
        <Container>
          <SectionTitle>Bonjour, je m’appelle Greg !</SectionTitle>
          <SectionDescription>
            Je suis un ingénieur basé à Paris, j’adore créer des projets et des
            outils pour être plus efficace.
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>
          <p>
            A 12 ans, je crée mon premier site de jeux, quelques mois plus tard
            il est racheté par une société. Je n’ai jamais arrêté depuis ! A 19
            ans, je deviens <strong>Ingénieur R&D</strong> au journal{' '}
            <a href="https://www.lemonde.fr">Le Monde</a> et fini par être tech
            lead sur le projet de CMS du groupe.
          </p>

          <p>
            Je rejoins ensuite l’équipe fondatrice de{' '}
            <a href="https://www.doctolib.fr">Doctolib</a> pour créer{' '}
            <strong>
              la plateforme de prise de rendez-vous médicaux leader en Europe
            </strong>
            .
          </p>

          <p>
            En 2017, je fonde <strong>Smooth Code</strong>, un studio de
            développement pour aider des startups telles que{' '}
            <a href="http://www.payfit.com">Payfit</a>,{' '}
            <a href="https://www.scaleway.com">Scaleway</a> ou{' '}
            <a href="https://www.welcometothejungle.com">
              Welcome to the Jungle
            </a>{' '}
            à scaler leurs produits techs.
          </p>

          <p>
            Au fil des années, je me suis pris de passion pour l’open source et
            le partage avec les autres. Que ce soit derrière un ordinateur ou en
            tant que speaker à des conférences, j’aime partager.{' '}
            <I18nLink to="/projects">Mes projets</I18nLink> sont utilisés par
            des milliers de développeurs à travers le monde.
          </p>

          <p>
            Je donne également des workshops, j’ai formé plus de 400
            développeurs en Europe dans des sociétés comme{' '}
            <a href="https://www.sncf.com">SNCF</a>,{' '}
            <a href="https://www.alan.com">Alan</a> ou{' '}
            <a href="https://www.mappy.com">Mappy</a>.
          </p>

          <p>
            N’hésitez par à me contacter par{' '}
            <a href="mailto:hey@gregberge.com">email</a> ou via{' '}
            <a href="https://twitter.com/neoziro">Twitter</a>. C’est toujours un
            plaisir d’échanger !
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}
