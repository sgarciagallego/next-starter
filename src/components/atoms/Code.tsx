import { styled } from '@linaria/react';

export default function Code({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledCode>{children}</StyledCode>;
}

const StyledCode = styled.code`
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  background: rgb(239, 241, 245);
  color: rgb(77, 79, 105);

  @media (prefers-color-scheme: dark) {
    background: rgb(30, 30, 46);
    color: rgb(205, 214, 244);
  }
`;
