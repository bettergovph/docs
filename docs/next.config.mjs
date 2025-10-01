import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  // MDX configuration options
  configPath: './source.config.ts',
  rootContentPath: './content',
  // Enable syntax highlighting and other MDX features
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    development: process.env.NODE_ENV === 'development',
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // Enable experimental features for better performance
  experimental: {
    mdxRs: false, // Keep using the JS-based MDX compiler for compatibility
    optimizePackageImports: ['fumadocs-ui', 'fumadocs-core'],
  },

  // Configure content source directories
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Image optimization for documentation assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Note: redirects and headers are not supported with static export
  // For static hosting, configure these at the hosting provider level

  // Output configuration for deployment
  // Comment out export to enable API routes for search
  // output: 'export',
  trailingSlash: false,

  // Asset prefix for CDN deployment (can be configured later)
  assetPrefix: process.env.ASSET_PREFIX || '',

  // Webpack configuration for better bundle optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};

export default withMDX(config);
