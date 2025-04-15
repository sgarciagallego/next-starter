import { styled } from '@linaria/react';

export default function Button({
  onClick,
  ariaPressed,
  ariaLabel,
  title,
  className,
  children,
}: {
  onClick?: () => void;
  ariaPressed?: boolean;
  ariaLabel?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel}
      title={title}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  height: 1.5rem;
  border: unset;
  position: relative;
  background: unset;
  
  &:has(svg) {
    width: 1.5rem;
    border-radius: unset;
    display: grid;
    place-items: center;

    & > svg {
      aspect-ratio: 1 / 1;
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;
