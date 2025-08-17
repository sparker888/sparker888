export function PortalFooter() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2025 Light-Speed 2026. Built by{' '}
            <a href="https://sparker888.com" className="text-purple-400 hover:text-purple-300">
              Stephen Parker
            </a>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="mailto:support@sparker888.com" className="text-slate-400 hover:text-white text-sm">
              Support
            </a>
            <a href="https://sparker888.com/contact" className="text-slate-400 hover:text-white text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}