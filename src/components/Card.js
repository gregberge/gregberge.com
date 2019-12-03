import styled, { th } from '@xstyled/styled-components'

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

export const CardBody = styled.div`
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
`
