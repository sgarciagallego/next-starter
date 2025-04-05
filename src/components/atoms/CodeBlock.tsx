import { styled } from '@linaria/react';
import { highlight } from 'sugar-high';

export default function CodeBlock({
  children,
}: {
  children: string;
}) {
  const code = highlight(children.trim());

  return (
    <StyledPre>
      <StyledCode dangerouslySetInnerHTML={{ __html: code }} />
    </StyledPre>
  );
}

const StyledPre = styled.pre`
  &:not(:last-child) {
    margin-bottom: 2em;
  }

  scrollbar-width: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--sh-background);
`;

const StyledCode = styled.code`
  counter-reset: step;
  overflow-x: auto;
  scrollbar-width: none;
  display: block;
  font-size: 1rem;
  line-height: 1.8125rem;

  &::before,
  &::after {
    content: none;
  }

  & .sh__line {
    &:not(:only-of-type)::before {
      content: counter(step);
      counter-increment: step;
      width: 1ch;
      margin-right: 2rem;
      display: inline-block;
      color: var(--sh-line-number);
      text-align: right;
    }

    &:nth-last-child(n + 10)::before,
    &:nth-last-child(n + 10) ~ span::before {
      width: 2ch;
    }

    & .sh__token--keyword {
      font-style: italic;
    }

    & .sh__token--class {
      font-weight: 800;
    }
  }
`;
