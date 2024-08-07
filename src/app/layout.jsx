import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import PlausibleProvider from 'next-plausible'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://sparker888.com'),
  title: {
    template: '%s - @sparker888',
    default: 'Stephen Parker @sparker888',
  },
  description: 'I\'m Stephen Parker aka @sparker888. I help companies build their online brands. I produce Light. Speed.✨ websites & apps as the Founder of Gravital Digital. My passion is producing sites that deliver incredible value and delight my clients. Here\'s an example case study. I also support 🧭 Midjourney AI image creators with an app called Midjourney Prompt Manager. Let\'s fly! 🚀',
  openGraph: {
    title: 'Stephen Parker @sparker888',
    description: 'Light. Speed.✨ websites & apps | Founder of Gravital Digital | Producer of Midjourney Prompt Manager',
    url: 'https://sparker888.com',
    siteName: '@sparker888',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Parker @sparker888',
    description: 'Light. Speed.✨ websites & apps | Founder of Gravital Digital | Producer of Midjourney Prompt Manager',
    images: ['/twitter-image.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <PlausibleProvider domain="sparker888.com">
      <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-pattern dark:bg-pattern">
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </PlausibleProvider>
  )
}