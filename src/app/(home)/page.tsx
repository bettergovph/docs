import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4">
      <h1 className="mb-4 text-4xl font-bold">BetterGov Documentation</h1>
      <p className="text-fd-muted-foreground mb-6 max-w-2xl mx-auto">
        A community-led initiative to create a better and more usable Philippine national government website.
        Learn how to contribute, set up your development environment, and help build a better digital government experience.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-4 text-lg font-semibold text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors w-fit mx-auto"
      >
        Get Started
      </Link>
    </main>
  );
}
