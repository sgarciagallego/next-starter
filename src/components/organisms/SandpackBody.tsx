import SandpackCodePreview from '@/components/molecules/SandpackCodePreview';
import type { SandpackFiles } from '@codesandbox/sandpack-react';
import { SandpackCodeEditor } from '@codesandbox/sandpack-react';
import { styled } from '@linaria/react';

export default function SandpackBody({
  files,
}: {
  files?: SandpackFiles;
}) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SandpackCodeEditor
          showTabs={files && Object.keys(files).length > 1}
        />
        <SandpackCodePreview />
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  flex: 1 1;
  container-type: inline-size;
`;

const StyledWrapper = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 1023.9px) {
    height: 100%;
    flex-direction: column;

    & > *:first-child {
      min-height: 12rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
  }

  & > * {
    flex: 1 1;

    &:first-child {
      min-height: unset;
      
      @media (min-width: 1024px) {
        border-right: 1px solid var(--sp-colors-surface2);
      }
    }

    &:last-child {
      @media (min-width: 1024px) {
        border-left: 1px solid var(--sp-colors-surface2);
      }
    }
  }
`;
