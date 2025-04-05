import { css } from '@linaria/core';
import NextLink from 'next/link';

export default function Link({
  type = 'inline',
  href,
  children,
}: {
  type?: 'inline' | 'block';
  href: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;

  if (href.startsWith('/')) {
    return (
      <NextLink
        href={href}
        className={type === 'inline' ? inline : block}
      >
        {children}
      </NextLink>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        className={type === 'inline' ? inline : block}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      aria-label='opens in new tab'
      href={href}
      className={type === 'inline' ? inline : block}
    >
      {children}
    </a>
  );
}

const inline = css`
  color: hsl(0 0% 0%);
  text-decoration: underline;
  text-decoration-color: hsl(0 0% 0%);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25rem;
  line-height: 1.275em;

  &:hover {
    background: hsl(0 0% 92%);
  }

  &:active,
  &:focus-visible {
    outline: none;
    background: hsl(0 0% 0%);
    color: hsl(0 0% 100%);
    text-decoration: none;
  }
`;

const block = css`
  border: 1px solid hsl(0 0% 88%);
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;
  color: hsl(0 0% 0%);
  font-weight: 500;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    background: hsl(0 0% 96%);
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid hsl(0 0% 4%);
    background: hsl(0 0% 12%);
    color: hsl(0 0% 100%);
  }
`;
