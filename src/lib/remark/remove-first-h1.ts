// A minimal Remark plugin that removes the first level-1 heading (H1)
// from the MDX AST tree. This prevents duplicated titles when the layout
// already renders the page title from frontmatter.

type ParentNode = {
  type: string;
  children?: unknown[];
};

type HeadingNode = {
  type: 'heading';
  depth: number;
};

export function remarkRemoveFirstH1() {
  return function transformer(tree: ParentNode) {
    let removed = false;

    function walk(node: unknown, parent: ParentNode | null) {
      if (removed) return;

      if (!node || typeof node !== 'object') return;

      const asAny = node as Record<string, unknown>;
      const type = asAny.type as string | undefined;

      if (type === 'heading' && (asAny as HeadingNode).depth === 1 && parent && Array.isArray(parent.children)) {
        const index = parent.children.indexOf(node as never);
        if (index !== -1) {
          parent.children.splice(index, 1);
          removed = true;
          return;
        }
      }

      const children = asAny.children as unknown[] | undefined;
      if (Array.isArray(children)) {
        // Iterate over a shallow copy since we may mutate children
        for (const child of [...children]) {
          walk(child, node as ParentNode);
          if (removed) return;
        }
      }
    }

    walk(tree, null);
  };
}


