import styled, { th, keyframes } from '@xstyled/styled-components'

const move = keyframes`
  to {
    transform: scale(1.2);
  }
`

export const Card = styled.box`
  background: linear-gradient(
    340deg,
    ${th.color('card-gradient-light')} 0%,
    ${th.color('card-gradient-dark')} 100%
  );
  border: 1;
  border-color: card-border;
  box-sizing: border-box;
  box-shadow: ${th.px(5)} ${th.px(5)} ${th.px(15)} rgba(0, 0, 0, 0.12);
  border-radius: 8;

  h4 {
    margin: 2 0;
    color: light100;
    font-weight: 700;
  }

  hr {
    border: 0;
    height: 1px;
    margin: 4 0;
    background-color: light500;
  }

  ul {
    padding: 0 0 0 2;
  }

  li {
    list-style-type: none;
    padding: 0;

    &::before {
      display: inline-block;
      content: '★';
      font-size: 0.6em;
      margin-right: 2;
      vertical-align: 15%;
      color: accent;
      animation: ${move} 500ms infinite;
      animation-direction: alternate-reverse;
    }
  }
`

export const CardLink = styled.a`
  ${Card} {
    transition: base;
  }

  &:focus {
    outline: none;
  }

  &:focus > ${Card}, &:hover > ${Card} {
    transform: translateY(${th.px(-3)}) scale(1.03);
    box-shadow: ${th.px(7)} ${th.px(7)} ${th.px(36)} rgba(0, 0, 0, 0.12);
    border-color: card-border-hover;
    outline: 0;
  }
`

export const CardHeader = styled.box`
  padding: 3;
  background-color: light700;
`

export const CardFooter = CardHeader

export const CardBody = styled.box`
  padding: 3;
`

export const CardTitle = styled.h3`
  font-size: 22;
  font-weight: 500;
  margin: 0 0 2;
  color: light100;
`

export const CardText = styled.pBox`
  margin: 0;
  text-align: justify;

  a {
    transition: base;
    border-bottom: 1px dotted;
    border-bottom-color: currentColor;

    &:hover {
      color: accent;
      border-bottom-color: accent;
    }
  }
`
