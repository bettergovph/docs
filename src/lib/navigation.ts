/**
 * Navigation configuration for BetterGov Documentation
 */

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface NavigationConfig {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export const navigationConfig: NavigationConfig = {
  main: [
    {
      title: 'About BetterGov',
      href: '/docs/about',
      description: 'Learn about our mission and vision',
    },
    {
      title: 'Getting Started',
      href: '/docs/getting-started',
      description: 'Set up your development environment',
    },
    {
      title: 'Meilisearch Setup',
      href: '/docs/meilisearch',
      description: 'Configure search functionality',
    },
    {
      title: 'Contributing',
      href: '/docs/contributing',
      description: 'Help improve BetterGov.ph',
      children: [
        {
          title: 'Testing',
          href: '/docs/contributing/testing',
          description: 'Testing guidelines and practices',
        },
        {
          title: 'Code of Conduct',
          href: '/docs/contributing/code-of-conduct',
          description: 'Community guidelines',
        },
      ],
    },
  ],
  footer: [
    {
      title: 'Resources',
      href: '#',
      children: [
        {
          title: 'GitHub',
          href: 'https://github.com/bettergovph/bettergov',
        },
        {
          title: 'Discord',
          href: 'https://discord.gg/mHtThpN8bT',
        },
      ],
    },
  ],
};

export function getNavigationItem(href: string): NavigationItem | null {
  for (const item of navigationConfig.main) {
    if (item.href === href) return item;
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) return child;
      }
    }
  }
  return null;
}

export function getBreadcrumbs(href: string): NavigationItem[] {
  const breadcrumbs: NavigationItem[] = [];

  for (const item of navigationConfig.main) {
    if (item.href === href) {
      breadcrumbs.push(item);
      return breadcrumbs;
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) {
          breadcrumbs.push(item, child);
          return breadcrumbs;
        }
      }
    }
  }

  return breadcrumbs;
}

export function isActiveNavItem(
  item: NavigationItem,
  currentPath: string
): boolean {
  if (item.href === currentPath) return true;

  if (item.children) {
    return item.children.some(child => child.href === currentPath);
  }

  return false;
}