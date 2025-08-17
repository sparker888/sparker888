import { PortalHeader } from '@/components/portal/PortalHeader'
import { PortalFooter } from '@/components/portal/PortalFooter'

export const metadata = {
  title: {
    template: '%s - Light-Speed 2026 Portal',
    default: 'Light-Speed 2026 Portal'
  },
  description: 'Customer portal for Light-Speed 2026 social media management platform'
}

export default function PortalLayout({ children }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900 text-white overflow-auto">
      <div className="min-h-full flex flex-col">
        <PortalHeader />
        <main className="flex-1">
          {children}
        </main>
        <PortalFooter />
      </div>
    </div>
  )
}