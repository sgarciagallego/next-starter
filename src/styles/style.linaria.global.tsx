import { css } from '@linaria/core';

export const globals = css`
  :global() {
    *, *::before, *::after {
      box-sizing: border-box;
    }

    * {
      margin: unset;
      padding: unset;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
        interpolate-size: allow-keywords;
      }
    }

    body {
      font-family: system-ui, sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    
    input, button, textarea, select {
      font: inherit;
    }
    
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }
    
    p {
      text-wrap: pretty;
    }

    h1, h2, h3, h4, h5, h6 {
      text-wrap: balance;
    }
  }
`;
