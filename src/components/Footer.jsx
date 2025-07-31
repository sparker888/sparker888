import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-amber-500 dark:hover:text-amber-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-slate-100 pb-16 pt-10 dark:border-slate-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 font-display font-semibold text-slate-800 dark:text-slate-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/gallery">Gallery</NavLink>
                <NavLink href="/contact">Contact</NavLink>

              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} Stephen Parker. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
