import { css } from '@linaria/core';

export const globals = css`
  :global() {
    // theming
    :root {
      --color-0: hsl(0, 0%, 100%);
      --color-10: hsl(0, 0%, 96%);
      --color-20: hsl(0, 0%, 85%);
      --color-30: hsl(0, 0%, 73%);
      --color-40: hsl(0, 0%, 62%);
      --color-50: hsl(0, 0%, 50%);
      --color-60: hsl(0, 0%, 39%);
      --color-70: hsl(0, 0%, 27%);
      --color-80: hsl(0, 0%, 16%); 
      --color-90: hsl(0, 0%, 4%);
      --color-100: hsl(0, 0%, 0%);

      --color-yellow: rgb(255, 230, 51);
    }

    // fluid typography
    @supports (font-size: clamp(1rem, 1cqi, 1rem)) {
      :root {
        --font-size--xs: clamp(
          0.651rem,
          -0.0245cqi +
          0.6584rem,
          0.64rem
        );
        --font-size--sm: clamp(
          0.7813rem,
          0.0417cqi +
          0.7687rem,
          0.8rem
        );
        --font-size--rg: clamp(
          0.9375rem,
          0.1389cqi +
          0.8958rem,
          1rem
        );
        --font-size--lg: clamp(
          1.125rem,
          0.2778cqi +
          1.0417rem,
          1.25rem
        );
        --font-size--xl: clamp(
          1.35rem,
          0.4722cqi +
          1.2083rem,
          1.5625rem
        );
        --font-size--2xl: clamp(
          1.62rem,
          0.7403cqi +
          1.3979rem,
          1.9531rem
        );
        --font-size--3xl: clamp(
          1.944rem,
          1.1053cqi +
          1.6124rem,
          2.4414rem
        );
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

    /* css reset */
    *,
    *::before,
    *::after {
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
      background: var(--color-10);
      color: var(--color-90);
      font-family: var(--font-typeface--sans);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    pre,
    code,
    kbd,
    samp {
      font-family: var(--font-typeface--mono);
    }

    /* accessible to screen readers */
    .sr-only {
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: auto;
      left: -10000px;
      clip: rect(0, 0, 0, 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
`;
