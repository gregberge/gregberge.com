import React from 'react'
import styled from '@xstyled/styled-components'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Container } from '../components/Container'

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

export function AppFooter() {
  return (
    <Container display="flex" mt={4} pb={4}>
      <Copyright>Greg Bergé © {currentYear}</Copyright>
      <Socials>
        <SocialLink
          title="My Twitter profile"
          href="https://twitter.com/neoziro"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          title="My GitHub profile"
          href="https://github.com/gregberge"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          title="My LinkedIn profile"
          href="https://www.linkedin.com/in/gregberge"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink title="Send me a mail" href="mailto:hey@gregberge.com">
          <FaEnvelope />
        </SocialLink>
      </Socials>
    </Container>
  )
}
