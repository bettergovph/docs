# BetterGov Documentation

Documentation site for the BetterGov platform built with Fumadocs and Next.js.

## About

BetterGov.ph is a modern platform that centralizes Philippine government services and information, 
making them more accessible to citizens. This documentation provides guides, API references, and resources for
contributors and users.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Justin322322/BetterGov-Docs.git

cd bettergov-docs/docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting
- `npm run format` - Format code with Prettier
- `npm run validate` - Run all validation checks
- `npm run sync-docs` - Sync documentation from BetterGov repository

## Documentation Sync

This documentation site automatically syncs with the main [BetterGov repository](https://github.com/bettergovph/bettergov) to keep content up-to-date:

- **Automatic Sync**: GitHub Actions workflow runs every 12 hours
- **Manual Sync**: Run `npm run sync-docs` to sync immediately
- **Files Synced**: README.md, docs/, CONTRIBUTING.md, CODE_OF_CONDUCT.md, TESTING.md

For detailed sync configuration and troubleshooting, see the documentation files in the repository:
- [Sync Guide](content/docs/sync-guide.mdx)
- [Token Setup](content/docs/token-setup.mdx)

## Contributing

Contributions are welcome! Please read our contributing guidelines and feel free to submit issues
and pull requests.
