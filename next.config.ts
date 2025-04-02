import type { NextConfig } from 'next';
import withLinaria from 'next-with-linaria';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withLinaria(nextConfig);
