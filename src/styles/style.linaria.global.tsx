import { css } from '@linaria/core';

export const globals = css`
  :global() {
    /* fluid typography */
    @supports (font-size: clamp(1rem, 1cqi, 1rem)) {
      :root {
        --font-size--xs: clamp(0.651rem, -0.0245cqi + 0.6584rem, 0.64rem);
        --font-size--sm: clamp(0.7813rem, 0.0417cqi + 0.7687rem, 0.8rem);
        --font-size--rg: clamp(0.9375rem, 0.1389cqi + 0.8958rem, 1rem);
        --font-size--lg: clamp(1.125rem, 0.2778cqi + 1.0417rem, 1.25rem);
        --font-size--xl: clamp(1.35rem, 0.4722cqi + 1.2083rem, 1.5625rem);
        --font-size--2xl: clamp(1.62rem, 0.7403cqi + 1.3979rem, 1.9531rem);
        --font-size--3xl: clamp(1.944rem, 1.1053cqi + 1.6124rem, 2.4414rem);
      }
    }
    @supports not (font-size: clamp(1rem, 1cqi, 1rem)) {
      :root {
        --font-size--xs: 0.651rem;
        --font-size--sm: 0.7813rem;
        --font-size--rg: 0.9375rem;
        --font-size--lg: 1.125rem;
        --font-size--xl: 1.35rem;
        --font-size--2xl: 1.62rem;
        --font-size--3xl: 1.944rem;
      }
      @media screen and (min-width: 1200px) {
        :root {
          --font-size--xs: 0.64rem;
          --font-size--sm: 0.8rem;
          --font-size--rg: 1rem;
          --font-size--lg: 1.25rem;
          --font-size--xl: 1.5625rem;
          --font-size--2xl: 1.9531rem;
          --font-size--3xl: 2.4414rem;
        }
      }
    }

    /* code highlighter */
    :root {
      --sh-line-number: #747474;
      --sh-background: #1e1e1f;
      --sh-class: #8fc7ff;
      --sh-identifier: #dfd6cf;
      --sh-sign: #b8d7f9;
      --sh-property: #eecfa0;
      --sh-entity: #edabaa;
      --sh-jsxliterals: #cbd5e1;
      --sh-string: #a4dfae;
      --sh-keyword: #e3cbeb;
      --sh-comment: #999999;
    }

    /* css reset */
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
      font-family: var(--font-typeface--sans);
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

    pre, code, kbd, samp {
      font-family: var(--font-typeface--mono);
    }
  }
`;
