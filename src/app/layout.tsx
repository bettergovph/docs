import '@/app/global.css';
import { Providers } from '@/components/providers';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.bettergov.ph'),
  title: {
    default: 'BetterGovPH Documentation',
    template: '%s | BetterGovPH Documentation',
  },
  description: 'Comprehensive documentation for BetterGov.ph - Building better government services for the Philippines',
  icons: {
    icon: '/icon.svg',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
