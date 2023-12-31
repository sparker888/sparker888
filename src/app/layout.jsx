import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - @sparker888',
    default:
      '@sparker888 - 💻 web developer, 🚁 aerial photographer and 🚀 gamer.',
  },
  description:
    'I&apos;m @sparker888, I&apos;m into 💻 web development and 🚁 aerial photography , 🎨 AI imagery and 🚀 gaming.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-pattern dark:bg-pattern">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
