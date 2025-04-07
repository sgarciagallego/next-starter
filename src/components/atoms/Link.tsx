import { css } from '@linaria/core';
import NextLink from 'next/link';
import { clsx } from 'utils/helpers';

export default function Link({
  type = 'inline',
  href,
  children,
}: {
  type?: 'primary' | 'secondary' | 'inline' | 'skiplink';
  href?: string;
  children: React.ReactNode;
}) {
  if (href?.startsWith('/')) {
    return (
      <NextLink
        href={href}
        className={clsx(
          type === 'primary' && primary,
          type === 'secondary' && secondary,
          type === 'inline' && inline
        )}
      >
        {children}
      </NextLink>
    );
  }

  if (href?.startsWith('#')) {
    return (
      <a
        href={href}
        className={clsx(
          type === 'primary' && primary,
          type === 'secondary' && secondary,
          type === 'inline' && inline
        )}
      >
        {children}
      </a>
    );
  }

  if (type === 'skiplink') {
    return (
      <a href='#main-content' className={`sr-only ${skiplink}`}>
        {children}
      </a>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={clsx(
        type === 'primary' && primary,
        type === 'secondary' && secondary,
        type === 'inline' && inline
      )}
    >
      <span>{children}</span>
      <span className='sr-only'>{' (opens in a new tab)'}</span>
    </a>
  );
}

const primary = css`
  border: 1px solid var(--color-100);
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  background: var(--color-80);
  color: var(--color-0);
  font-weight: 500;
  text-decoration: none;

  &:not(:last-child):not(:has(+ a)) {
    margin-bottom: 2rem;
  }

  &:hover {
    border: 1px solid var(--color-80);
    background: var(--color-70);
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid var(--color-100);
    background: var(--color-yellow);
    background-image: linear-gradient(to top, var(--color-100) 0.125rem, var(--color-yellow) 0.125rem, var(--color-yellow));
    color: var(--color-100);
  }
`;

const secondary = css`
  border: 1px solid var(--color-20);
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  background: var(--color-0);
  color: var(--color-100);
  font-weight: 500;
  text-decoration: none;

  &:not(:last-child):not(:has(+ a)) {
    margin-bottom: 2rem;
  }

  &:hover {
    background: var(--color-10);
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid var(--color-100);
    background: var(--color-yellow);
    background-image: linear-gradient(to top, var(--color-100) 0.125rem, var(--color-yellow) 0.125rem, var(--color-yellow));
    color: var(--color-100);
  }
`;

const inline = css`
  color: var(--color-100);
  text-decoration: underline;
  text-decoration-color: var(--color-100);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25rem;
  line-height: 1.275em;

  &:hover {
    background: var(--color-20);
  }

  &:active,
  &:focus-visible {
    outline: none;
    background: var(--color-yellow);
    background-image: linear-gradient(to top, var(--color-100) 0.125rem, var(--color-yellow) 0.125rem, var(--color-yellow));
    color: var(--color-100);
  }
`;

const skiplink = css`
  &:focus-visible {
    width: fit-content;
    height: auto;
    overflow: visible;
    clip: auto;
    clip-path: none;
    outline: none;
    border: 1px solid var(--color-100);
    border-radius: 0.25rem;
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1rem;
    left: 1rem;   
    background: var(--color-yellow);
    color: var(--color-100);
    text-decoration: none;
    white-space: normal;
  }
`;
