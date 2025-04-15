'use client';

import Button from '@/components/atoms/Button';
import H from '@/components/atoms/H';
import List from '@/components/molecules/List';
import { sandpackBtn } from '@/lib/sandpack';
import {
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { styled } from '@linaria/react';
import { SkipBack, SquareArrowOutUpRight } from 'lucide-react';
import { clsx } from 'utils/helpers';
import { spBtnBase } from '../molecules/SandpackPreviewActions';

export default function SandpackHeader({
  title = 'Code Playground',
}: { title?: string }) {
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
            className={spBtnBase}
          >
            <SkipBack />
          </Button>
        </li>
        <li>
          <UnstyledOpenInCodeSandboxButton
            aria-label='Open in CodeSandbox'
            title='Open in CodeSandbox'
            className={clsx(sandpackBtn, spBtnBase)}
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
        font-size: unset;
        font-weight: unset;
        line-height: 1.5;
        letter-spacing: unset;
      }

      &:nth-child(2) {
        margin-left: auto;
      }
    }
  }
`;
