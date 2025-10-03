import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkRemoveFirstH1 } from './src/lib/remark/remove-first-h1';
import { z } from 'zod';

// Enhanced frontmatter schema for BetterGov documentation
const customFrontmatterSchema = frontmatterSchema.extend({
  category: z.string().optional(),
  order: z.number().optional(),
  tags: z.array(z.string()).optional(),
  lastUpdated: z.string().optional(),
  author: z.string().optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  prerequisites: z.array(z.string()).optional(),
  relatedPages: z.array(z.string()).optional(),
  icon: z.string().optional()
});

// Enhanced meta schema for navigation
const customMetaSchema = metaSchema.extend({
  icon: z.string().optional(),
  collapsed: z.boolean().optional()
});

// Define documentation collections
export const docs = defineDocs({
  docs: {
    schema: customFrontmatterSchema,
  },
  meta: {
    schema: customMetaSchema,
  },
});

export default defineConfig({
  // MDX processing options
  mdxOptions: {
    remarkPlugins: [
      // Add remark plugins for enhanced markdown processing
      remarkRemoveFirstH1,
    ],
    rehypePlugins: [
      // Add rehype plugins for HTML processing
    ],
    jsx: true,
    format: 'mdx',
    development: process.env.NODE_ENV === 'development'
  }
});
