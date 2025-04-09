import Blockquote from '@/components/atoms/Blockquote';
import Code from '@/components/atoms/Code';
import H from '@/components/atoms/H';
import Image from '@/components/atoms/Image';
import Link from '@/components/atoms/Link';
import P from '@/components/atoms/P';
import CodeBlock from '@/components/molecules/CodeBlock';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    code: ({ children }) => <Code>{children}</Code>,
    h1: ({ children }) => <H level={1}>{children}</H>,
    h2: ({ children }) => <H level={2}>{children}</H>,
    h3: ({ children }) => <H level={3}>{children}</H>,
    h4: ({ children }) => <H level={4}>{children}</H>,
    img: ({ src, alt }) => <Image src={src} alt={alt} />,
    a: ({ children, href }) => (
      <Link href={href}>{children}</Link>
    ),
    p: ({ children }) => <P>{children}</P>,
    pre: ({ children }) => (
      <CodeBlock>{children.props.children}</CodeBlock>
    ),
    blockquote: ({ children }) => (
      <Blockquote>{children}</Blockquote>
    ),
    ...components,
  };
}
