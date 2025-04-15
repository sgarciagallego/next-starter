'use client';

import Button from '@/components/atoms/Button';
import List from '@/components/molecules/List';
import {
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clsx } from 'utils/helpers';

export default function SandpackPreviewActions({
  isPreview,
  setMode,
}: {
  isPreview: boolean;
  setMode: (mode: 'result' | 'console') => void;
}) {
  const [reloading, setReloading] = useState(false);
  const { sandpack, listen } = useSandpack();
  const { refresh } = useSandpackNavigation();

  useEffect(() => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const stopListening = listen((msg: any) => {
      if (msg?.status === 'idle') {
        setReloading(false);
      }
    });

    return () => {
      stopListening();
    };
  }, [listen]);

  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <StyledWrapper
      role='group'
      aria-label='Sandpack Preview Actions'
    >
      <List>
        <li>
          <Button
            onClick={() => setMode('result')}
            ariaPressed={isPreview}
            className={clsx(isPreview ? spBtnActive : spBtnBase)}
          >
            Preview
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setMode('console')}
            ariaPressed={!isPreview}
            className={clsx(
              !isPreview ? spBtnActive : spBtnBase
            )}
          >
            Console
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              setReloading(true);
              refresh();
            }}
            ariaLabel='Refresh preview pane'
            title='Refresh preview pane'
          >
            <RefreshCw
              className={clsx(spBtnBase, reloading && reload)}
            />
          </Button>
        </li>
      </List>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0.625rem 1.25rem;

  @media (min-width: 320px) and (max-width: 1023.9px) {
    background: var(--sp-colors-surface2);
  }

  @media (min-width: 1024px) {
    border-bottom: 0.125rem solid var(--sp-colors-surface2);
  }

  & > ul {
    align-items: center;

    & > li:nth-child(3) {
      margin-left: auto;
    }
  }
`;

export const spBtnBase = css`
  color: var(--sp-colors-clickable);

  &:hover {
    color: var(--sp-colors-hover);
  }
`;

const spBtnActive = css`
  color: var(--sp-colors-hover);

  &::after {
    content: '' !important;
    position: absolute !important;
    @media (min-width: 320px) and (max-width: 1023.9px) {
      bottom: -0.625rem !important;
    }
    @media (min-width: 1024px) {
      bottom: -0.75rem !important;
    }
    left: -0.125rem !important;
    right: -0.125rem !important;
    width: calc(100% + 0.25rem) !important;
    height: 0.125rem !important;
    background: var(--sp-colors-accent) !important;
  }
`;

const reload = css`
  animation: spin 390ms ease-in-out 1 forwards;

  @keyframes spin {
    to {
      transform: rotate(180deg);
    }
  }
`;
