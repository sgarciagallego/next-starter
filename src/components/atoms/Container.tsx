import { styled } from '@linaria/react';

export default function Container({
  as: Component = 'div',
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return Component === 'div' ? (
    <StyledContainer>{children}</StyledContainer>
  ) : (
    <Component>
      <StyledContainer>{children}</StyledContainer>
    </Component>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 320px) {
    max-width: calc(320px - 2rem);
  }
  @media (min-width: 480px) {
    max-width: calc(480px - 2rem);
  }
  @media (min-width: 640px) {
    max-width: calc(640px - 2rem);
  }
  @media (min-width: 768px) {
    max-width: calc(768px - 2rem);
  }
  @media (min-width: 1024px) {
    max-width: calc(1024px - 2rem);
  }
  @media (min-width: 1280px) {
    max-width: calc(1280px - 2rem);
  }
  @media (min-width: 1536px) {
    max-width: calc(1536px - 2rem);
  }
`;
