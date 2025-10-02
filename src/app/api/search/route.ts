import { NextRequest, NextResponse } from 'next/server';

// Static search data - this should match your actual pages
const searchIndex = [
  {
    id: '/docs/about',
    title: 'About',
    content: 'About BetterGov - Learn about our mission and goals',
    url: '/docs/about'
  },
  {
    id: '/docs/meilisearch',
    title: 'Meilisearch',
    content: 'Meilisearch integration - Search functionality for BetterGov',
    url: '/docs/meilisearch'
  },
  {
    id: '/docs/getting-started',
    title: 'Getting Started',
    content: 'Get started with BetterGov - Quick start guide',
    url: '/docs/getting-started'
  },
  {
    id: '/docs/getting-started/installation',
    title: 'Installation',
    content: 'Installation guide - How to install and set up BetterGov',
    url: '/docs/getting-started/installation'
  },
  {
    id: '/docs/contributing',
    title: 'Contributing',
    content: 'Contributing to BetterGov - How to contribute to the project',
    url: '/docs/contributing'
  },
  {
    id: '/docs/contributing/testing',
    title: 'Testing',
    content: 'Testing guidelines - How to test your contributions',
    url: '/docs/contributing/testing'
  },
  {
    id: '/docs/contributing/code-of-conduct',
    title: 'Code of Conduct',
    content: 'Community guidelines - Our code of conduct and community standards',
    url: '/docs/contributing/code-of-conduct'
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query')?.toLowerCase() || '';
  
  if (!query) {
    return NextResponse.json([]);
  }

  const results = searchIndex
    .filter((item) => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();
      return title.includes(query) || content.includes(query);
    })
    .map((item) => ({
      id: item.id,
      type: 'page' as const,
      content: item.title,
      url: item.url
    }))
    .slice(0, 10);

  return NextResponse.json(results);
}