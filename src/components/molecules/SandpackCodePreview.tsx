'use client';

import SandpackPreviewPane from '@/components/molecules/SandpackPreviewPane';
import type { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react';
import { styled } from '@linaria/react';
import { useState } from 'react';
import SandpackPreviewActions from './SandpackPreviewActions';

export default function SandpackCodePreview({
  template,
}: {
  template: SandpackPredefinedTemplate;
}) {
  const [mode, setMode] = useState<'result' | 'console'>(
    'result'
  );
  const isPreview = mode === 'result';

  const props = {
    mode,
    setMode,
    isPreview,
  };

  return (
    <StyledWrapper>
      <SandpackPreviewActions template={template} {...props} />
      <SandpackPreviewPane {...props} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;
