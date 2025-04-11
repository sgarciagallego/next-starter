import { styled } from '@linaria/react';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

export default async function CodeBlock({
  lang = 'tsx',
  filename,
  children,
}: {
  lang?: BundledLanguage;
  filename?: string;
  children: string;
}) {
  const code =
    typeof children === 'string' ? children : String(children);

  const html = await codeToHtml(code.trim(), {
    lang,
    themes: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
    transformers: [
      transformerNotationHighlight(),
      transformerNotationDiff(),
    ],
  });

  return filename ? (
    <StyledCodeContainer>
      {filename && <div>{filename}</div>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </StyledCodeContainer>
  ) : (
    <StyledCodeContainer
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const StyledCodeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: fit-content;
  border-radius: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & .shiki code {
    overflow-x: auto;
    scrollbar-width: none;
    counter-reset: line-number;
    display: block;
    padding: 0.5rem 0;

    & .line {
      display: inline-block;
      width: 100%;

      &:not(:only-of-type)::before {
        counter-increment: line-number;
        width: 1ch;
        margin-right: 2rem;
        display: inline-block;
        content: counter(line-number);
        text-align: right;
      }
      
      &:only-of-type::before { content: ''; }

      &::before { padding-left: 1rem; }

      &::after { 
        content: '';
        padding-right: 1rem; 
      }

      &.highlighted {
        width: 100%;
        background: rgb(0, 0, 0, 0.1);
      }

      &.diff {
        &.add {
          background: rgb(0, 255, 0, 0.2);
        }

        &.remove {
          background: rgb(255, 0, 0, 0.1);
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background: rgb(30, 30, 46);

    & .shiki,
    & .shiki span {
      color: var(--shiki-dark) !important;
      background: var(--shiki-dark-bg) !important;
    }
  }
`;
