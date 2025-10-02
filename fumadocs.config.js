/**
 * @type {import('fumadocs-core/config').Config}
 */
const config = {
  // Site metadata
  site: {
    title: 'BetterGov Documentation',
    description: 'Documentation for BetterGov.ph - a modern platform that centralizes Philippine government services and information.',
    url: 'https://docs.bettergov.ph',
    logo: {
      text: 'BetterGov',
      icon: '/logo.svg'
    }
  },

  // Theme and branding configuration
  theme: {
    primaryColor: '#2563eb', // Blue theme matching government branding
    accentColor: '#10b981', // Green accent for success states
    layout: 'docs', // Documentation-focused layout
    sidebar: {
      defaultOpenLevel: 1,
      banner: {
        text: 'BetterGov Platform Documentation',
        href: '/'
      }
    },
    navbar: {
      title: 'BetterGov Docs',
      logo: '/logo.svg',
      links: [
        {
          text: 'GitHub',
          href: 'https://github.com/bettergovph/bettergov',
          external: true
        },
        {
          text: 'Platform',
          href: 'https://bettergov.ph',
          external: true
        }
      ]
    },
    footer: {
      text: '© 2024 BetterGov Philippines. Built with Fumadocs.',
      links: [
        {
          text: 'Privacy Policy',
          href: '/privacy'
        },
        {
          text: 'Terms of Service',
          href: '/terms'
        },
        {
          text: 'Contact',
          href: '/contact'
        }
      ]
    }
  },

  // Navigation structure
  navigation: {
    main: [
      {
        title: 'Getting Started',
        href: '/docs/getting-started',
        items: [
          {
            title: 'Installation & Setup',
            href: '/docs/getting-started/installation'
          }
        ]
      },
      {
        title: 'Contributing',
        href: '/docs/contributing',
        items: [
          {
            title: 'Testing Guidelines',
            href: '/docs/contributing/testing'
          },
          {
            title: 'Code of Conduct',
            href: '/docs/contributing/code-of-conduct'
          }
        ]
      },
      {
        title: 'Meilisearch',
        href: '/docs/meilisearch'
      }
    ]
  },



  // Content configuration
  content: {
    sources: [
      {
        type: 'docs',
        baseUrl: '/docs',
        rootDir: './content/docs'
      },
      {
        type: 'api',
        baseUrl: '/api',
        rootDir: './content/api'
      }
    ],
    collections: {
      docs: {
        schema: 'frontmatter',
        type: 'doc'
      }
    }
  },

  // Build and deployment settings
  build: {
    output: 'static',
    trailingSlash: false,
    cleanUrls: true
  }
};

module.exports = config;