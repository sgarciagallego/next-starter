import P from '@/components/atoms/P';
import { styled } from '@linaria/react';
import { ChevronRight } from 'lucide-react';

export default function Accordion({
  items,
}: {
  items: {
    uid: number;
    summary: string;
    info: string;
  }[];
}) {
  if (items.length === 0) return null;

  if (items.length === 1) {
    return (
      <StyledDetails>
        <summary>
          <ChevronRight />
          <span>{items[0].summary}</span>
        </summary>
        <P>{items[0].info}</P>
      </StyledDetails>
    );
  }

  return (
    <StyledSection>
      {items.map((item) => (
        <StyledDetails key={item.uid}>
          <summary>
            <ChevronRight />
            <span>{item.summary}</span>
          </summary>
          <P>{item.info}</P>
        </StyledDetails>
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  max-width: 640px;
  
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledDetails = styled.details`
  overflow: hidden;
  width: 100%;
  max-width: 640px;
  border-radius: 0.25rem;
  border: 1px solid var(--color-20);
  background: var(--color-0);
  
  &:not(:last-child):has(+ details) {
    margin-bottom: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > summary {
    z-index: 1;
    cursor: pointer;
    border-radius: 0.1875rem;
    padding: 0.375rem 0.625rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    position: relative;
    transition: 
      border-bottom-left-radius 260ms ease-in-out,
      border-bottom-right-radius 260ms ease-in-out;  
    font-weight: 500;

    &::marker { 
      content: none;
    }

    &:hover {
      background: var(--color-10);
    }

    &:active,
    &:focus-visible {
      outline: 1px solid var(--color-100);
      outline-offset: -1px;
      background: var(--color-yellow);
    }

    & > svg {
      width: 1.125em;
      height: 1.125em;
      transition: rotate 260ms ease-in-out;
    }
  }

  &::details-content {
    block-size: 0;
    transition: 
      block-size 260ms ease-in-out,
      content-visibility 260ms ease-in-out;
    transition-behavior: allow-discrete;
  }

  &[open]::details-content {
    block-size: auto;
  }

  &[open] > summary {
    &:hover {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:active,
    &:focus-visible {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & > svg {
      rotate: 90deg;
    }
  }

  & > p {
    padding: 0.375rem 1rem;
    color: var(--color-70);
  }
`;
