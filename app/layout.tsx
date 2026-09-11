import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: {
    default: 'cinestudio',
    template: '%s · cinestudio',
  },
  description:
    'Multi-agent AI film rendering platform. Generate 30-second to 20-minute films from a single prompt, coordinated by 27 specialised agents.',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon-32.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    title: 'cinestudio — Multi-agent AI film rendering platform',
    description:
      'Generate 30-second to 20-minute films from a single prompt, coordinated by 27 specialised agents.',
    images: [{ url: '/og.png', width: 1280, height: 640, alt: 'cinestudio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cinestudio — Multi-agent AI film rendering platform',
    description:
      'Generate 30-second to 20-minute films from a single prompt, coordinated by 27 specialised agents.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f1e7' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e12' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
