import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Img from 'gatsby-image'
import { useLangKey } from './I18nContext'

const Review = styled.div`
  font-size: 14;

  img {
    border-radius: 50%;
  }

  cite {
    font-style: normal;
    font-weight: 700;
    color: light100;
  }

  .job-title {
    color: light600;
  }

  blockquote {
    font-style: italic;
    margin: 2 0 0;
    font-size: 14;
    text-align: justify;
  }

  a {
    transition: base;
    color: lighter;

    &:hover {
      color: accent;
    }
  }
`

const locales = {
  en: {
    tweet: 'See tweet',
    linkedin: 'See LinkedIn account',
  },
  fr: {
    tweet: 'Voir le tweet',
    linkedin: 'Voir le compte LinkedIn',
  },
}

export function ReviewCard({ review }) {
  const langKey = useLangKey()
  const t = locales[langKey]

  return (
    <Review>
      <Box row mx={-2}>
        <Box col="auto" px={2}>
          <Img fixed={review.avatar.fixed} alt={review.name} />
        </Box>
        <Box col px={2}>
          <cite>{review.name}</cite>
          <div className="job-title">{review.jobTitle}</div>
        </Box>
        <Box col="auto" px={2}>
          {review.url ? (
            <a
              title={review.linkType === 'twitter' ? t.tweet : t.linkedin}
              href={review.url}
            >
              {review.linkType === 'twitter' ? <FaTwitter /> : <FaLinkedin />}
            </a>
          ) : (
            <FaEnvelope />
          )}
        </Box>
      </Box>
      <blockquote>{review.text}</blockquote>
    </Review>
  )
}
