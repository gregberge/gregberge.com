import React from 'react'
import styled, { keyframes, useColorMode } from '@xstyled/styled-components'

const blink = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`

const Switcher = styled.button`
  width: 60;
  height: 30;
  position: relative;
  border-radius: 20;
  display: flex;
  align-items: center;
  padding: 0 6rpx;
  background-color: #a6b0f3;
  transition: all 0.2s linear;
  border: 0;

  &:focus {
    outline: none;
    appearance: none;
    box-shadow: glow;
  }

  .star {
    position: absolute;
    background-color: white;
    clip-path: circle(45%);
    transition: all 0.2s linear;
  }

  .star.star1 {
    width: 6;
    height: 6;
    top: 6;
    left: 70%;
  }

  .star.star2 {
    width: 4;
    height: 4;
    top: 18;
    left: 65%;
  }

  .star.star3 {
    width: 3;
    height: 3;
    top: 7;
    left: 52%;
    opacity: 0;
  }

  .round-btn {
    width: 20;
    height: 20;
    clip-path: circle(50% at 50% 50%);
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: all 0.2s linear;
  }

  .round-btn .moon-mode {
    width: 18;
    height: 18;
    border-radius: 50%;
    background: #00134c;
    position: absolute;
    left: -4;
    top: 0;
    opacity: 0;
    transition: all 0.1s linear;
  }

  &.dark {
    background: #00134c;
  }

  &.dark .star {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }

  &.dark .star1 {
    opacity: 0.6;
    left: 16%;
    animation: ${blink} 1.8s linear infinite alternate-reverse;
  }

  &.dark .star2 {
    left: 36%;
    animation: ${blink} 2.4s linear infinite alternate-reverse;
  }

  &.dark .star3 {
    animation: ${blink} 1.2s linear infinite alternate-reverse;
  }

  &.dark .round-btn {
    transform: translateX(30px) rotate(20deg);
    border-color: #00134c;
  }

  &.dark .round-btn .moon-mode {
    opacity: 1;
  }
`

export function DarkModeSwitcher() {
  const [mode, setMode] = useColorMode()
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    setShow(true)
  }, [])
  if (!show) return null
  return (
    <Switcher
      type="button"
      className={`switcher ${mode}`}
      onClick={() => setMode(mode => (mode === 'light' ? 'dark' : 'light'))}
    >
      <div className="star star1" />
      <div className="star star2" />
      <div className="star star3" />
      <div className="round-btn" role="button">
        <div className="moon-mode" />
      </div>
    </Switcher>
  )
}
