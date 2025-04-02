import { styled } from '@linaria/react';

export default function H({
  level = 1,
  children,
}: {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}) {
  const HeadingLevel =
    `h${level}` as keyof JSX.IntrinsicElements;

  const levelToSize = {
    4: 'lg',
    3: 'xl',
    2: '2xl',
    1: '3xl',
  } as const;

  return (
    <StyledH as={HeadingLevel} size={levelToSize[level]}>
      {children}
    </StyledH>
  );
}

const StyledH = styled.h1<{
  size?: 'lg' | 'xl' | '2xl' | '3xl';
}>`
  margin-bottom: 0.5em;
  font-family: var(--font-typeface--sans);
  font-size: ${({ size = '3xl' }) => `var(--font-size--${size})`};
  font-weight: 600;
  letter-spacing: -0.0375em;
  line-height: 1.15;
  overflow-wrap: break-word;
`;
