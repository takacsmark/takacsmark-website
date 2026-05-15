import type { Metadata } from 'next';

import '@workspace/ui/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://takacsmark.com'),
  title: {
    default: 'Mark Takács',
    template: '%s | Mark Takács',
  },
  description: 'Indie AI researcher, builder, writer, and thinker on human existence.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: 'Mark Takács',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-svh">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
