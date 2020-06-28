import React from 'react'
import styled, { Box, up, css } from '@xstyled/styled-components'
import jsonp from 'jsonp'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { Container } from '../components/Container'
import { useLangKey } from '../components/I18nContext'
import { useMustBeEmail, InputField, Button } from '../components/Form'

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: -2 -3;

  ${up(
    'md',
    css`
      flex-direction: row;
    `,
  )}
`

const Teaser = styled.h2`
  font-size: 26;
  font-weight: 500;
  color: lighter;
  margin: 4 0;
`

const Success = styled.div`
  text-align: center;

  p:first-child {
    font-size: 26;
    color: lighter;
    margin: 2 0;
  }

  p:last-child {
    font-size: 18;
  }
`

const locales = {
  en: {
    success: (
      <>
        <p>Thanks, one last thing...</p>
        <p>
          Please <strong>check your inbox</strong> to confirm your subscription!
        </p>
      </>
    ),
    firstName: 'First Name',
    teaser:
      'Get emails from me about open source, business, learning and teaching.',
    submit: 'Submit',
    submitting: 'Submitting',
  },
  fr: {
    success: (
      <>
        <p>Merci, une dernière chose...</p>
        <p>
          Pouvez-vous <strong>regarder votre boîte mail</strong> pour confirmer
          votre inscription.
        </p>
      </>
    ),
    firstName: 'Prénom',
    teaser:
      'Retrouvez toute l’actualité open source, business, workshops dans ma newsletter.',
    submit: 'Envoyer',
    submitting: 'Envoi en cours...',
  },
}

export function Newsletter() {
  const langKey = useLangKey()
  const t = locales[langKey]

  const mustBeEmail = useMustBeEmail()

  function handleSubmit({ FNAME, EMAIL }) {
    const params = new URLSearchParams(
      'u=52fd0cbf3e5a6413c71ca38a5&id=25b7eb1ae7',
    )
    params.append('FNAME', FNAME)
    params.append('EMAIL', EMAIL)
    const url = `https://gregberge.us4.list-manage.com/subscribe/post-json?${params.toString()}`
    return new Promise((resolve) => {
      jsonp(url, { param: 'c' }, (error) => {
        if (error) {
          resolve({ [FORM_ERROR]: error.message })
          return
        }
        resolve()
      })
    })
  }

  return (
    <Container my={6}>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit, submitting, submitSucceeded }) => (
          <form noValidate onSubmit={handleSubmit}>
            {submitSucceeded ? (
              <Success>{t.success}</Success>
            ) : (
              <>
                <Teaser>{t.teaser}</Teaser>
                <FormLayout>
                  <Box py={2} px={3}>
                    <InputField
                      name="FNAME"
                      label={t.firstName}
                      placeholder="Hubert"
                    />
                  </Box>
                  <Box py={2} px={3}>
                    <InputField
                      name="EMAIL"
                      label="Email"
                      type="email"
                      placeholder="hubert@oss.com"
                      required
                      validate={mustBeEmail}
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    flex="1 0 auto"
                    py={2}
                    px={3}
                  >
                    <Button type="submit" disabled={submitting}>
                      {submitting ? t.submitting : t.submit}
                    </Button>
                  </Box>
                </FormLayout>
              </>
            )}
          </form>
        )}
      </Form>
    </Container>
  )
}
