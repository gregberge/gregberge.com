import styled, { up, css, th } from '@xstyled/styled-components'

export const SectionTitle = styled.h2Box`
  font-weight: 500;
  font-size: 26;
  color: lighter;
  margin: 0 0 4 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: calc(100vw - ${th.px(48)});
  white-space: nowrap;
  overflow: hidden;

  &::before {
    content: '★';
    margin-right: 3;
    font-family: monospace;
    color: accent;
    font-size: 20;
    position: relative;
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    max-width: 280;
    width: 100%;
    background-color: light500;
    position: relative;
    top: 3;
    margin-left: 20;
  }

  ${up(
    'md',
    css`
      font-size: 32;
      margin: 0 0 4 3;

      &::after {
        top: 5;
      }
    `,
  )}
`

export const SectionDescription = styled.p`
  font-size: 20;
  margin: 4 0 5;
`
