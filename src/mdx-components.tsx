import Code from '@/components/atoms/Code';
import CodeBlock from '@/components/atoms/CodeBlock';
import H from '@/components/atoms/H';
import Link from '@/components/atoms/Link';
import P from '@/components/atoms/P';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    code: ({ children }) => <Code>{children}</Code>,
    pre: ({ children }) => (
      <CodeBlock>{children.props.children}</CodeBlock>
    ),
    h1: ({ children }) => <H level={1}>{children}</H>,
    h2: ({ children }) => <H level={2}>{children}</H>,
    h3: ({ children }) => <H level={3}>{children}</H>,
    h4: ({ children }) => <H level={4}>{children}</H>,
    a: ({ children, href }) => (
      <Link href={href}>{children}</Link>
    ),
    p: ({ children }) => <P>{children}</P>,
    ...components,
  };
}
