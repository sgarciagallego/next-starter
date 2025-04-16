import {
  SandpackConsole,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { clsx } from 'utils/helpers';

export default function SandpackPreviewPane({
  isPreview,
}: { isPreview: boolean }) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <StyledContainer
      role='group'
      aria-label='Sandpack Preview Pane'
    >
      <StyledWrapper>
        <StyledOutput
          className={clsx(!isPreview ? hidden : block)}
        >
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </StyledOutput>

        <StyledOutput
          className={clsx(isPreview ? hidden : block)}
        >
          <SandpackConsole
            showHeader={false}
            showResetConsoleButton={false}
            resetOnPreviewRestart
            standalone
          />
        </StyledOutput>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  flex: 1 1;
  padding: 1.25rem;
  isolation: isolate;
  position: relative;
`;

const StyledWrapper = styled.div`
  overflow: clip;
  height: 100%;
  max-height: calc(100svh - 16rem);
  border-radius: 0.25rem;

  @media (min-width: 1024px) {
    min-height: 12rem;
  }
`;

const StyledOutput = styled.output`
  &, & > * {
    height: 100%;
  }
`;

const hidden = css`
  display: none;
`;

const block = css`
  display: block;
`;
