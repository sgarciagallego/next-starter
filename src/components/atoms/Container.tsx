import { styled } from '@linaria/react';

export default function Container({
  as: Component = 'div',
  position = 'normal',
  children,
}: {
  as?: React.ElementType;
  position?: 'normal' | 'center';
  children: React.ReactNode;
}) {
  return Component === 'div' ? (
    <StyledContainer position={position}>
      {children}
    </StyledContainer>
  ) : (
    <Component>
      <StyledContainer position={position}>
        {children}
      </StyledContainer>
    </Component>
  );
}

const StyledContainer = styled.div<{
  position?: 'normal' | 'center';
}>`
  width: 100%;
  min-height: ${({ position }) =>
    position === 'center' ? '100svh' : 'auto'};
  margin: 0 auto;
  display: ${({ position }) =>
    position === 'center' ? 'flex' : 'block'};
  flex-direction: ${({ position }) =>
    position === 'center' ? 'column' : ''};
  justify-content: ${({ position }) =>
    position === 'center' ? 'center' : ''};
  align-items: ${({ position }) =>
    position === 'center' ? 'center' : ''};

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
