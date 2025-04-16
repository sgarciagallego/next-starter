'use client';

import Button from '@/components/atoms/Button';
import H from '@/components/atoms/H';
import List from '@/components/molecules/List';
import {
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { SkipBack, SquareArrowOutUpRight } from 'lucide-react';

export default function SandpackHeader({
  title,
}: {
  title?: string;
}) {
  const { sandpack } = useSandpack();
  const { resetAllFiles } = sandpack;

  return (
    <StyledHeader>
      <List>
        <li>
          <H level={2}>{title}</H>
        </li>
        <li>
          <Button
            onClick={() => resetAllFiles()}
            ariaLabel='Reset code'
            title='Reset code'
            className={sandpackButton}
          >
            <SkipBack />
          </Button>
        </li>
        <li>
          <UnstyledOpenInCodeSandboxButton
            aria-label='Open in CodeSandbox'
            title='Open in CodeSandbox'
            className={sandpackButton}
          >
            <SquareArrowOutUpRight />
          </UnstyledOpenInCodeSandboxButton>
        </li>
      </List>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 0.375rem 1.25rem;
  background: var(--sp-colors-surface2);

  & > ul {
    align-items: center;

    & > li {
      & > h2 {
        margin-bottom: unset;
        color: var(--sp-colors-hover);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: unset;
      }

      &:nth-child(2) {
        margin-left: auto;
      }
    }
  }
`;

const sandpackButton = css`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: unset;
  border-radius: unset;
  display: grid;
  place-items: center;
  background: unset;
  
  & > svg {
    aspect-ratio: 1 / 1;
    width: 1.125rem;
    height: 1.125rem;
    stroke: var(--sp-colors-clickable);
  }

  &:hover > svg {
    stroke: var(--sp-colors-hover);
  }
`;
