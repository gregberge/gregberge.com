import React from 'react'
import styled, { css, th, up } from '@xstyled/styled-components'
import jsonp from 'jsonp'
import { validate as validateEmail } from 'email-validator'
import { Form, useField } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { Container } from '../components/Container'

const Teaser = styled.h2`
  font-size: 26;
  font-weight: 500;
  color: lighter;
  margin: 4 0;
`

const FormLayout = styled.div`
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

const FormField = styled.box`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2 3;
`

const FormFieldLabel = styled.label`
  font-family: monospace;
  font-size: 15;
  color: accent;
  margin-bottom: 2;
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  appearance: none;
  background-color: light800;
  border: 1px solid;
  border-color: light500;
  border-radius: 5;
  color: lighter;
  padding: 2 3;
  transition: base;

  &::placeholder {
    color: light400;
  }

  &:hover {
    border-color: light400;
  }

  &:focus {
    outline: none;
    box-shadow: ${th.color('shadow')} 0 0 0 ${th.space(1)};
    border-color: accent;
  }
`

const Button = styled.button`
  font-family: monospace;
  font-size: 15;
  appearance: none;
  background-color: light800;
  border: 1px solid;
  border-color: light500;
  border-radius: 5;
  color: accent;
  padding: 2 3;
  transition: base;
  cursor: pointer;
  margin-top: 3;

  &:active {
    transform: scale(1.05);
  }

  &:hover:not(:disabled) {
    border-color: light400;
  }

  &:focus {
    outline: none;
    box-shadow: ${th.color('shadow')} 0 0 0 ${th.space(1)};
    border-color: accent;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  ${up(
    'md',
    css`
      margin-top: 0;
    `,
  )}
`

const FormFieldLabelError = styled.div`
  color: danger;
`

function FirstnameField() {
  const field = useField('FNAME')
  return (
    <FormField>
      <FormFieldLabel htmlFor="fname">First Name</FormFieldLabel>
      <Input id="fname" placeholder="Hubert" {...field.input} />
    </FormField>
  )
}

function EmailField() {
  const field = useField('EMAIL', {
    validate(value) {
      if (!value) return 'Required'
      if (!validateEmail(value)) return 'Invalid Email'
      return undefined
    },
  })
  return (
    <FormField>
      <FormFieldLabel htmlFor="email">
        Email
        {field.meta.touched && field.meta.invalid && (
          <FormFieldLabelError>{field.meta.error}</FormFieldLabelError>
        )}
      </FormFieldLabel>
      <Input id="email" placeholder="hubert@oss.com" {...field.input} />
    </FormField>
  )
}

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

export function Newsletter() {
  function handleSubmit({ FNAME, EMAIL }) {
    const params = new URLSearchParams(
      'u=52fd0cbf3e5a6413c71ca38a5&id=25b7eb1ae7',
    )
    params.append('FNAME', FNAME)
    params.append('EMAIL', EMAIL)
    const url = `https://gregberge.us4.list-manage.com/subscribe/post-json?${params.toString()}`
    return new Promise(resolve => {
      jsonp(url, { param: 'c' }, (error, data) => {
        if (error) {
          resolve({ [FORM_ERROR]: error.message })
          return
        }
        console.log(data)
        resolve()
      })
    })
  }

  return (
    <Container my={6}>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit, submitting, submitSucceeded }) => (
          <form onSubmit={handleSubmit}>
            {submitSucceeded ? (
              <Success>
                <p>Thanks, one last thing...</p>
                <p>
                  Please <strong>check your inbox</strong> to confirm your
                  subscription!
                </p>
              </Success>
            ) : (
              <>
                <Teaser>
                  Get emails from me about open source, business, learning and
                  teaching.
                </Teaser>
                <FormLayout>
                  <FirstnameField />
                  <EmailField />
                  <FormField flex="1 0 auto">
                    <Button type="submit" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </FormField>
                </FormLayout>
              </>
            )}
          </form>
        )}
      </Form>
    </Container>
  )
}
