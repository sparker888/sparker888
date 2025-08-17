'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

function MobileMenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PortalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/portal' },
    { name: 'Documentation', href: '/portal/documentation' },
  ]

  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/portal" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              LS
            </div>
            <div>
              <div className="font-bold text-white">Light-Speed 2026</div>
              <div className="text-xs text-slate-400">Customer Portal</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm">
              Preview Mode
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MobileMenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Back to Main Site */}
          <Link 
            href="https://sparker888.com" 
            className="hidden md:block text-slate-400 hover:text-white text-sm transition-colors"
          >
            ← Back to sparker888.com
          </Link>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-white bg-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm">
                  Preview Mode
                </span>
              </div>
              <Link 
                href="https://sparker888.com"
                className="block px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                ← Back to sparker888.com
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}