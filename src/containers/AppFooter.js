import React from 'react'
import styled from '@xstyled/styled-components'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Container } from '../components/Container'
import { useLangKey } from '../components/I18nContext'

const Copyright = styled.div`
  color: light400;
  font-size: 12;
  font-family: monospace;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
`

const SocialLink = styled.a`
  color: lighter;
  padding: 0 2;
  transition: base;

  &:hover {
    color: accent;
  }
`

const currentYear = new Date().getFullYear()

const locales = {
  en: {
    twitter: 'My Twitter profile',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    email: 'Send me an email',
  },
  fr: {
    twitter: 'Mon profil Twitter',
    github: 'Mon profil GitHub',
    linkedin: 'Mon profil LinkedIn',
    email: 'Écrivez-moi',
  },
}

export function AppFooter() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Container display="flex" mt={4} pb={4}>
      <Copyright>Greg Bergé © {currentYear}</Copyright>
      <Socials>
        <SocialLink title={t.twitter} href="https://twitter.com/neoziro">
          <FaTwitter />
        </SocialLink>
        <SocialLink title={t.github} href="https://github.com/gregberge">
          <FaGithub />
        </SocialLink>
        <SocialLink
          title={t.linkedin}
          href="https://www.linkedin.com/in/gregberge"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink title={t.email} href="mailto:hey@gregberge.com">
          <FaEnvelope />
        </SocialLink>
      </Socials>
    </Container>
  )
}
