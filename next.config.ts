import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import withLinaria from 'next-with-linaria';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({});

export default withLinaria(withMDX(nextConfig));
