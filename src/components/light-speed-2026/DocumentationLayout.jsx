'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import clsx from 'clsx'

const documentationSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Documentation Overview', href: '/portal/documentation' },
      { title: 'Installation Guide', href: '/portal/documentation/setup/installation' },
      { title: 'Environment Setup', href: '/portal/documentation/setup/environment' },
      { title: 'First Run Verification', href: '/portal/documentation/setup/first-run' },
    ]
  },
  {
    title: 'Customization',
    items: [
      { title: 'Branding Guide', href: '/portal/documentation/customization/branding' },
      { title: 'Platform Configuration', href: '/portal/documentation/customization/platforms' },
    ]
  },
  {
    title: 'Deployment',
    items: [
      { title: 'PocketBase Backend', href: '/portal/documentation/deployment/pocketbase' },
      { title: 'Frontend Deployment', href: '/portal/documentation/deployment/frontend' },
    ]
  },
  {
    title: 'Examples',
    items: [
      { title: 'FitLife Social (Fitness)', href: '/portal/documentation/examples/fitness' },
      { title: 'ProductFlow Pro (E-commerce)', href: '/portal/documentation/examples/ecommerce' },
    ]
  },
  {
    title: 'Customer Portal',
    items: [
      { title: 'Portal Overview', href: '/portal' },
      { title: 'Dashboard Preview', href: '/portal/dashboard' },
    ]
  }
]

function DocumentationSidebar({ className = '' }) {
  const pathname = usePathname()

  return (
    <nav className={clsx('space-y-6', className)}>
      {documentationSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'block text-sm px-3 py-2 rounded-lg transition',
                      isActive
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-800'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

function MobileMenuButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
      <span className="ml-2">Menu</span>
    </button>
  )
}

export function DocumentationLayout({ children, title, description }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div>
              <Link 
                href="/portal" 
                className="text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400"
              >
                Light-Speed 2026
              </Link>
              <span className="text-slate-400 mx-2">/</span>
              <span className="text-slate-600 dark:text-slate-400">Documentation</span>
            </div>
            <MobileMenuButton 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isOpen={isMobileMenuOpen}
            />
          </div>
        </Container>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen">
          <div className="p-6">
            <DocumentationSidebar />
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-slate-900/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-800 p-6 overflow-y-auto">
              <DocumentationSidebar />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {title && (
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {title}
                </h1>
                {description && (
                  <p className="text-xl text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                )}
              </header>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}