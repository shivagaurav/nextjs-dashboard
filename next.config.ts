import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/docs', destination: `${process.env.DOCS_DOMAIN}/docs` },
      { source: '/docs/:path+', destination: `${process.env.DOCS_DOMAIN}/docs/:path+` },
      { source: '/docs-static/:path+', destination: `${process.env.DOCS_DOMAIN}/docs-static/:path+` },
    ];
  },
};

export default nextConfig;