import { styled } from '@linaria/react';

export default function P({
  size = 'rg',
  children,
}: {
  size?: 'xs' | 'sm' | 'rg';
  children: React.ReactNode;
}) {
  return <StyledP size={size}>{children}</StyledP>;
}

const StyledP = styled.p<{ size?: 'xs' | 'sm' | 'rg' }>`
  font-family: var(--font-typeface--sans);
  font-size: ${({ size = 'rg' }) => `var(--font-size--${size})`};
  overflow-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:not(:last-child):has(+ ul),
  &:not(:last-child):has(+ ol) {
    margin-bottom: 1em;
  }
`;
