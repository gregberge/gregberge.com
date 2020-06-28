import React from 'react'
import styled, { Box, up, css, th } from '@xstyled/styled-components'
import { useField } from 'react-final-form'
import { validate as validateEmail } from 'email-validator'
import { useLangKey } from './I18nContext'

const FormField = styled.box`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const FormFieldLabel = styled.label`
  font-family: monospace;
  font-size: 15;
  color: accent;
  margin-bottom: 2;
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  line-height: 1.2;
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
    box-shadow: glow;
    border-color: accent;
  }
`

export const Button = styled.button`
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

const locales = {
  en: {
    required: 'Required',
    invalidEmail: 'Invalid Email',
  },
  fr: {
    required: 'Requis',
    invalidEmail: 'Email invalide',
  },
}

export function InputField({
  id,
  required,
  type,
  validate: validateProp,
  label,
  name,
  placeholder,
  fieldAs,
  rows,
}) {
  const langKey = useLangKey()
  const t = locales[langKey]
  const field = useField(name, {
    validate: (value) => {
      if (required && !value) return t.required
      if (validateProp) return validateProp(value)
      return undefined
    },
  })
  const idOrName = id || name
  const errored = field.meta.touched && field.meta.invalid
  return (
    <FormField>
      <FormFieldLabel htmlFor={idOrName}>
        {label}{' '}
        {required && !errored && (
          <Box forwardedAs="span" color="danger">
            *
          </Box>
        )}
        {errored && <Box color="danger">{field.meta.error}</Box>}
      </FormFieldLabel>
      <Input
        as={fieldAs}
        required={required}
        type={type}
        id={idOrName}
        placeholder={placeholder}
        rows={rows}
        {...field.input}
      />
    </FormField>
  )
}

export function useMustBeEmail() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (value) => {
    if (!validateEmail(value)) return t.invalidEmail
    return undefined
  }
}
