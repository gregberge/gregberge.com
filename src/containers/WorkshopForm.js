import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
import { FORM_ERROR } from 'final-form'
import { Form } from 'react-final-form'
import { InputField, Button, useMustBeEmail } from '../components/Form'
import { useLangKey } from '../components/I18nContext'

const Success = styled.div`
  text-align: center;
  font-size: 18;
  color: lighter;
  margin: 5 0;
`

const locales = {
  en: {
    success: "Thanks! I'll call you back as quickly as possible.",
    name: 'Name',
    email: 'Email',
    role: 'Role',
    company: 'Company',
    teamSize: 'Team Size',
    city: 'City',
    country: 'Country',
    message: 'How can I help you?',
    submit: 'Submit',
    submitting: 'Submitting...',
  },
  fr: {
    success: 'Merci ! Je vous recontacte très rapidement !',
    name: 'Nom',
    email: 'Email',
    role: 'Role',
    company: 'Société',
    teamSize: 'Taille de l’équipe',
    city: 'Ville',
    country: 'Pays',
    message: 'Comment puis-je vous aider ?',
    submit: 'Envoyer',
    submitting: 'Envoi en cours...',
  },
}

export function WorkshopForm() {
  const langKey = useLangKey()
  const t = locales[langKey]
  const mustBeEmail = useMustBeEmail()

  return (
    <Form
      onSubmit={(values) => {
        const body = new URLSearchParams()
        body.append('form-name', 'workshop')
        Object.entries(values).forEach(([name, value]) => {
          body.append(name, value)
        })
        return fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        })
          .catch((error) => ({ [FORM_ERROR]: error.message }))
          .then(() => {})
      }}
    >
      {({ handleSubmit, submitSucceeded, submitting }) => (
        <>
          {submitSucceeded && <Success>{t.success}</Success>}
          {!submitSucceeded && (
            <form
              name="workshop"
              data-netlify="true"
              noValidate
              onSubmit={handleSubmit}
            >
              <Box row mx={-3} my={4}>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField name="name" label={t.name} required />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField
                    name="email"
                    label={t.email}
                    type="email"
                    validate={mustBeEmail}
                    required
                  />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField name="role" label={t.role} required />
                </Box>
                <Box col={{ xs: 1, md: 2 / 3 }} px={3} py={2}>
                  <InputField name="company" label={t.company} />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField
                    name="teamSize"
                    label={t.teamSize}
                    type="number"
                    placeholder="10"
                  />
                </Box>
                <Box col={{ xs: 1, md: 7 / 12 }} px={3} py={2}>
                  <InputField name="city" label={t.city} />
                </Box>

                <Box col={{ xs: 1, md: 5 / 12 }} px={3} py={2}>
                  <InputField name="country" label={t.country} />
                </Box>

                <Box col={1} px={3} py={2}>
                  <InputField
                    fieldAs="textarea"
                    rows={4}
                    name="message"
                    label={t.message}
                  />
                </Box>

                <Box col px={3} py={2} display="flex" justifyContent="flex-end">
                  <Button disabled={submitting} type="submit">
                    {submitting ? t.submitting : t.submit}
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </>
      )}
    </Form>
  )
}
