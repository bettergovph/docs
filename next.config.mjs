import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  // MDX configuration options
  configPath: './source.config.ts',
  rootContentPath: './content',
  // Enable syntax highlighting and other MDX features
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    development: process.env.NODE_ENV === 'development'
  }
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  // Enable experimental features for better performance
  experimental: {
    mdxRs: false, // Keep using the JS-based MDX compiler for compatibility
    optimizePackageImports: ['fumadocs-ui', 'fumadocs-core']
  },

  // Configure content source directories
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Image optimization for documentation assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
    formats: ['image/webp', 'image/avif']
  },

  // Redirect configuration for clean URLs
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: true
      }
    ];
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Output configuration for static deployment
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
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
        os: false
      };
    }
    
    return config;
  }
};

export default withMDX(config);
