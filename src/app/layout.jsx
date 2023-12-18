import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Stephen Parker',
    default:
      'Stephen Parker - @sparker888 - 🧑🏼‍🚀 front-end developer, 🚁 aerial photographer and 🚀 gamer.',
  },
  description:
    'I’m @sparker888, practices 🧑🏼‍🚀 front-end development and 🚁 aerial photography living on the Space Coast of Florida.',
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
