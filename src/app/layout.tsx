import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Manu Sharma's resume",
  description: 'This all about the Resume of Manu Sharma',
};

export const dynamic = 'force-dynamic';
export const revalidate = 5;
export const dynamicParams = true;
export const fetchCache = 'force-no-store';
export const runtime = 'edge';
export const preferredRegion = 'auto';
export const maxDuration = 5;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          themes={['orange', 'yellow', 'light-yellow', 'light', 'dark']}
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
