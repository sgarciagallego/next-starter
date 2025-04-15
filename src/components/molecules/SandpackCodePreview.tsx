'use client';

import SandpackPreviewPane from '@/components/molecules/SandpackPreviewPane';
import { styled } from '@linaria/react';
import { useState } from 'react';
import SandpackPreviewActions from './SandpackPreviewActions';

export default function SandpackCodePreview() {
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
      <SandpackPreviewActions {...props} />
      <SandpackPreviewPane {...props} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;
