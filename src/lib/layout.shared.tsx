import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BetterGovLogo } from '@/components/icons';

/**
 * Shared layout configurations for BetterGov Documentation
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <BetterGovLogo className="w-6 h-6" aria-hidden={true} />
          <span className="font-semibold">BetterGov Documentation</span>
        </div>
      ),
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/bettergovph/bettergov',
        external: true,
      },
      {
        text: 'bettergov.ph',
        url: 'https://bettergov.ph',
        external: true,
      },
    ],
  };
}
