import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import PlausibleProvider from 'next-plausible'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - @sparker888',
    default:
      'Steve Parker 💻 Web developer & 📸 PPA photographer sparker888@gmail.com.',
  },
  description:
    'I&apos;m Steve Parker aka @sparker888. I help companies build their online brands through 💻 web development and digital design. I&apos;m a PPA 📸 photographer, FAA-licensed 🚁 drone pilot and a Midjourney 🧭 AI expert.',
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
        <body className="bg-pattern dark:bg-pattern flex h-full">
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
