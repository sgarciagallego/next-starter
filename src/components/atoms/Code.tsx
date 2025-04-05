import { styled } from '@linaria/react';
import { highlight } from 'sugar-high';

export default function Code({
  children,
}: {
  children: string;
}) {
  const code = highlight(children.trim());

  return (
    <StyledCode dangerouslySetInnerHTML={{ __html: code }} />
  );
}

const StyledCode = styled.code`
  background: var(--sh-background);
`;
