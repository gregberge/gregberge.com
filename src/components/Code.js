import React from 'react'
import styled, {
  css,
  ThemeContext,
  useColorMode,
  up,
} from '@xstyled/styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import getPrismTheme from './prismTheme'

const Editor = styled.div`
  background-color: light800;
  color: light100;
  padding: 3 4;
  margin: 5 -4;
  overflow: auto;
  font-size: 16;
  line-height: 1.4;
  overflow-y: auto;

  > textarea:focus {
    outline: none;
  }

  ${up(
    'sm',
    css`
      border-radius: 3;
    `,
  )}
`

const globalModules = {
  react: 'React',
}

export function LiveConfig({ modules }) {
  Object.assign(globalModules, modules)
  return null
}

export function usePrismTheme() {
  const theme = React.useContext(ThemeContext)
  const [mode] = useColorMode()
  return getPrismTheme({ theme, mode })
}

export function Code({ children, lang = 'markup' }) {
  const prismTheme = usePrismTheme()
  return (
    <Editor>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={lang}
        theme={prismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Editor>
  )
}
