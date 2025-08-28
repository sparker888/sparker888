import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8" style={{ zIndex: 1 }}>
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col" style={{ zIndex: 2 }}>
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
