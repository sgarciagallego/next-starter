import { css } from '@linaria/core';
import NextLink from 'next/link';

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (!href) return null;

  if (href.startsWith('/')) {
    return (
      <NextLink href={href} className={styles}>
        {children}
      </NextLink>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={styles}>
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
      className={styles}
    >
      {children}
    </a>
  );
}

const styles = css`
  color: hsl(0 0% 0%);
  text-decoration: underline;
  text-decoration-color: hsl(0 0% 0%);
  text-decoration-thickness: 0.0625rem;
  text-underline-offset: 0.25rem;
  line-height: 1.275em;

  &:hover {
    background: hsl(0 0% 90%);
  }

  &:active,
  &:focus-visible {
    outline: none;
    background: hsl(0 0% 0%);
    color: hsl(0 0% 100%);
    text-decoration: none;
  }
`;
