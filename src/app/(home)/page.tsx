import React from 'react';
import Link from 'next/link';
import { BetterGovLogo } from '@/components/icons';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4">
      <div className="flex justify-center mb-6">
        <BetterGovLogo className="h-32 w-32 md:h-40 md:w-40" aria-label="BetterGov Logo" />
      </div>
      <h1 className="mb-4 text-4xl font-bold">BetterGov Documentation</h1>
      <p className="text-fd-muted-foreground mb-6 max-w-2xl mx-auto">
        Comprehensive documentation for BetterGov.ph - a modern platform that centralizes Philippine government services and information. Learn how to contribute, set up your development environment, and help build a better digital government experience.
      </p>
      <Link
        href="/docs/about"
        className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-4 text-lg font-semibold text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors w-fit mx-auto"
      >
        Get Started
      </Link>
    </main>
  );
}
