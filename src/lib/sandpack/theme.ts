import type { SandpackTheme } from '@codesandbox/sandpack-react';

export const theme: SandpackTheme = {
  colors: {
    surface1: '#282c34',
    surface2: '#21252b',
    surface3: '#2c313c',
    clickable: '#a8b1c2',
    base: '#a8b1c2',
    disabled: '#4d4d4d',
    hover: '#e8effc',
    accent: '#c678dd',
    error: '#e06c75',
    errorSurface: '#ffeceb',
  },
  syntax: {
    plain: '#a8b1c2',
    comment: {
      color: '#757575',
      fontStyle: 'italic',
    },
    keyword: '#c678dd',
    tag: '#e06c75',
    punctuation: '#a8b1c2',
    definition: '#62aeef',
    property: '#d19a66',
    static: '#a8b1c2',
    string: '#98c379',
  },
  font: {
    body: 'var(--font-typeface--sans)',
    mono: 'var(--font-typeface--mono)',
    size: '15px',
    lineHeight: '27px',
  },
};
