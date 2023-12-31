import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - @sparker888',
    default:
      '@sparker888 - Steve Parker 💻 web developer & 📸 photographer sparker888@gmail.com.',
  },
  description:
    'I&apos;m Steve Parker aka @sparker888. I help companies build their online brands through 💻 web development, 📸 photography and 🎨 AI imagery.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="bg-pattern dark:bg-pattern flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
