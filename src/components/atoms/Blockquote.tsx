import { styled } from '@linaria/react';

export default function Blockquote({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledBlockquote>{children}</StyledBlockquote>;
}

const StyledBlockquote = styled.blockquote`
  border-left: 0.125rem solid var(--color-20);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding: 0.375rem 1rem 0.375rem 0.5rem;
  display: flex;
  background: var(--color-0);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &::before {
    content: '💡';
    width: 1.5em;
    height: 1.5em;
    aspect-ratio: 1 / 1;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
