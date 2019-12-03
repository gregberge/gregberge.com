import React from 'react'
import styled, { keyframes, th } from '@xstyled/styled-components'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { TwitterShareButton, FacebookShareButton } from 'react-share'

const InnerShare = styled.div`
  margin: 5 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18;
  margin: 0 -2;

  > div {
    margin: 0 2;
  }

  > div[role='button'] {
    line-height: 0;
    cursor: pointer;
    transition: base;

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

export function Share({ url, title, twitterHandle }) {
  return (
    <InnerShare>
      <Neon>❤</Neon>
      <span>Share article</span>
      <Line />
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle.split('@').join('')}
      >
        <FaTwitter />
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        <FaFacebook />
      </FacebookShareButton>
    </InnerShare>
  )
}
