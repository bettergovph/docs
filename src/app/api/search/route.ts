import { createSearchAPI } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

export const { GET } = createSearchAPI('simple', {
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    content: page.data.description || '',
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  })),
});
