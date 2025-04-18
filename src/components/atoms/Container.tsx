import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { clsx } from 'utils/helpers';

export default function Container({
  as: Component = 'div',
  id,
  position = 'normal',
  size = 'lg',
  children,
}: {
  as?: React.ElementType;
  id?: string;
  position?: 'normal' | 'center';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) {
  return Component === 'div' ? (
    <StyledContainer
      id={id}
      position={position}
      className={clsx(
        size === 'sm' && sizeSm,
        size === 'md' && sizeMd,
        size === 'lg' && sizeLg
      )}
    >
      {children}
    </StyledContainer>
  ) : (
    <Component id={id}>
      <StyledContainer
        position={position}
        className={clsx(
          size === 'sm' && sizeSm,
          size === 'md' && sizeMd,
          size === 'lg' && sizeLg
        )}
      >
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
    position === 'center' ? 'calc(100svh - 8rem)' : 'auto'};
  margin: 0 auto;
  display: ${({ position }) =>
    position === 'center' ? 'flex' : 'block'};
  flex-direction: ${({ position }) =>
    position === 'center' ? 'column' : ''};
  justify-content: ${({ position }) =>
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
`;

const sizeSm = css`
  @media (min-width: 1024px) {
    max-width: calc(1024px - 2rem);
  }
`;

const sizeMd = css`
  @media (min-width: 1024px) {
    max-width: calc(1024px - 2rem);
  }

  @media (min-width: 1280px) {
    max-width: calc(1280px - 2rem);
  }
`;

const sizeLg = css`
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
