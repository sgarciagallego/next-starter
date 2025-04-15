import { block, hidden } from '@/lib/sandpack';
import {
  SandpackConsole,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
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
  border-radius: 0.25rem;
`;

const StyledOutput = styled.output`
  &, & > * {
    height: 100%;
  }
`;
