import React from 'react'
import styled, { Box } from '@xstyled/styled-components'
import { FORM_ERROR } from 'final-form'
import { Form } from 'react-final-form'
import { InputField, Button, mustBeEmail } from '../components/Form'

const Success = styled.div`
  text-align: center;
  font-size: 18;
  color: lighter;
  margin: 5 0;
`

export function WorkshopForm() {
  const formRef = React.useRef()
  return (
    <Form
      defaultError="An error happen, please retry"
      onSubmit={values => {
        const action = formRef.current.getAttribute('action')
        const body = new URLSearchParams()
        Object.entries(values).forEach(([name, value]) => {
          body.append(name, value)
        })
        return fetch(action, {
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        }).catch(error => ({ [FORM_ERROR]: error.message }))
      }}
    >
      {({ handleSubmit, submitSucceeded, submitting }) => (
        <>
          {submitSucceeded && (
            <Success>
              Thanks! I&apos;ll call you back as quickly as possible.
            </Success>
          )}
          {!submitSucceeded && (
            <form
              ref={formRef}
              data-netlify="true"
              noValidate
              onSubmit={handleSubmit}
            >
              <Box row mx={-3} my={4}>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField name="name" label="Name" required />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField
                    name="email"
                    label="Email"
                    type="email"
                    validate={mustBeEmail}
                    required
                  />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField name="role" label="Role" required />
                </Box>
                <Box col={{ xs: 1, md: 2 / 3 }} px={3} py={2}>
                  <InputField name="company" label="Company" />
                </Box>
                <Box col={{ xs: 1, md: 1 / 3 }} px={3} py={2}>
                  <InputField
                    name="teamSize"
                    label="Team Size"
                    type="number"
                    placeholder="10"
                  />
                </Box>
                <Box col={{ xs: 1, md: 7 / 12 }} px={3} py={2}>
                  <InputField name="city" label="City" />
                </Box>

                <Box col={{ xs: 1, md: 5 / 12 }} px={3} py={2}>
                  <InputField name="country" label="Country" />
                </Box>

                <Box col={1} px={3} py={2}>
                  <InputField
                    fieldAs="textarea"
                    rows={4}
                    name="message"
                    label="How can I help you?"
                  />
                </Box>

                <Box col px={3} py={2} display="flex" justifyContent="flex-end">
                  <Button disabled={submitting} type="submit">
                    {submitting ? 'Submitting...' : 'Submit'}
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
