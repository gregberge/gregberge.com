import React from 'react'
import styled, { keyframes, th } from '@xstyled/styled-components'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
import { useLangKey } from './I18nContext'

const InnerShare = styled.div`
  margin: 5 -3 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18;

  > div:first-child {
    margin-right: 2;
  }

  > div[role='button'] {
    line-height: 0;
    cursor: pointer;
    transition: base;
    color: lighter;
    height: 48;
    padding: 0 3;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: accent;
    }
  }

  > span {
    line-height: 2.5;
    margin: 0 2;
  }
`

const neon = p => {
  const red = th.color('danger')(p)

  return keyframes`
    from {
      text-shadow: 0 0 10px ${red}, 0 0 20px ${red};
    }
  `
}

const Neon = styled.div`
  animation: ${neon} 1.5s ease-in-out infinite alternate;
  color: danger;
`

const Line = styled.div`
  margin: 0 2;
  flex: 1;
  border-bottom: 1px solid;
  border-bottom-color: light500;
`

const locales = {
  en: {
    share: `Share article`,
  },
  fr: {
    share: `Partager l’article`,
  },
}

export function Share({ url, title }) {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <InnerShare>
      <Neon>❤</Neon>
      <span>{t.share}</span>
      <Line />
      <TwitterShareButton url={url} title={title} via="neoziro">
        <FaTwitter />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook />
      </FacebookShareButton>
    </InnerShare>
  )
}
