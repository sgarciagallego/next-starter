import { css } from '@linaria/core';
import NextLink from 'next/link';
import { clsx } from 'utils/helpers';

export default function Link({
  type = 'inline',
  href,
  children,
}: {
  type?: 'primary' | 'secondary' | 'inline';
  href: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;

  if (href.startsWith('/')) {
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

  if (href.startsWith('#')) {
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
  border: 1px solid rgb(10, 10, 10);
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  background: rgb(31, 31, 31);
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-decoration: none;

  &:not(:last-child):not(:has(+ a)) {
    margin-bottom: 2rem;
  }

  &:hover {
    border: 1px solid rgb(52, 52, 52);
    background: rgb(73, 73, 73);
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid rgb(0, 0, 0);
    background: rgb(255, 230, 51);
    background-image: linear-gradient(to top, rgb(10, 10, 10) 0.125rem, rgb(255, 230, 51) 0.125rem, rgb(255, 230, 51));
    color: rgb(0, 0, 0);
  }
`;

const secondary = css`
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-decoration: none;

  &:not(:last-child):not(:has(+ a)) {
    margin-bottom: 2rem;
  }

  &:hover {
    background: rgb(245, 245, 245);
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid rgb(0, 0, 0);
    background: rgb(255, 230, 51);
    background-image: linear-gradient(to top, rgb(10, 10, 10) 0.125rem, rgb(255, 230, 51) 0.125rem, rgb(255, 230, 51));
    color: rgb(0, 0, 0);    
  }
`;

const inline = css`
  color: rgb(0, 0, 0);
  text-decoration: underline;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25rem;
  line-height: 1.275em;

  &:hover {
    background: rgb(235, 235, 235);
  }

  &:active,
  &:focus-visible {
    outline: none;
    background: rgb(255, 230, 51);
    background-image: linear-gradient(to top, rgb(10, 10, 10) 0.125rem, rgb(255, 230, 51) 0.125rem, rgb(255, 230, 51));
    color: rgb(0, 0, 0);
  }
`;
