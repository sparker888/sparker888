'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MeshGradient } from '@paper-design/shaders-react'

export function Layout({ children }) {
  return (
    <>
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0" style={{ zIndex: -1 }}>
        <MeshGradient
          style={{ height: '100vh', width: '100vw' }}
          distortion={0.79}
          swirl={0.3}
          offsetX={-0.44}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={0.28}
          colors={[
            "hsl(221, 100%, 94%)",
            "hsl(32, 95%, 44%)",
            "hsl(200, 98%, 39%)",
            "hsl(26, 97%, 24%)"
          ]}
        />
      </div>
      
      {/* Main Content Background */}
      <div className="fixed inset-0 flex justify-center sm:px-8" style={{ zIndex: 1 }}>
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white/90 backdrop-blur ring-1 ring-slate-100 dark:bg-slate-900/90 dark:ring-slate-300/20" />
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
