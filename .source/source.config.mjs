// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var customFrontmatterSchema = frontmatterSchema.extend({
  category: z.string().optional(),
  order: z.number().optional(),
  tags: z.array(z.string()).optional(),
  lastUpdated: z.string().optional(),
  author: z.string().optional(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  prerequisites: z.array(z.string()).optional(),
  relatedPages: z.array(z.string()).optional()
});
var customMetaSchema = metaSchema.extend({
  icon: z.string().optional(),
  collapsed: z.boolean().optional()
});
var docs = defineDocs({
  docs: {
    schema: customFrontmatterSchema
  },
  meta: {
    schema: customMetaSchema
  }
});
var source_config_default = defineConfig({
  // MDX processing options
  mdxOptions: {
    remarkPlugins: [
      // Add remark plugins for enhanced markdown processing
    ],
    rehypePlugins: [
      // Add rehype plugins for HTML processing
    ],
    jsx: true,
    format: "mdx",
    development: process.env.NODE_ENV === "development"
  }
});
export {
  source_config_default as default,
  docs
};
