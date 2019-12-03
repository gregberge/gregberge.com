import React from 'react'

function getGradientTransform(position) {
  switch (position) {
    case 'right':
      return 'translate(13 97.5) rotate(4.90249) scale(239.878)'
    case 'left':
    default:
      return 'rotate(114.928 99.33 86.583) scale(195.736)'
  }
}

export function ProjectShape({ color, position, ...props }) {
  const gradientId = `gradient-${color}`
  return (
    <svg viewBox="0 0 253 227" fill="none" {...props}>
      <path
        d="M245 120.5c0 58.542-47.458 106-106 106S0 138.542 0 80 156.671 0 215.213 0 245 61.958 245 120.5z"
        fill={`url(#${gradientId})`}
        fillOpacity={0.4}
      />
      <defs>
        <radialGradient
          id={gradientId}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform={getGradientTransform(position)}
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} stopOpacity={0.04} />
        </radialGradient>
      </defs>
    </svg>
  )
}
