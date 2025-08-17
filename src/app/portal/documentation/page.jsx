import { DocumentationLayout } from '@/components/light-speed-2026/DocumentationLayout'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Documentation Overview - Light-Speed 2026',
  description: 'Complete documentation for Light-Speed 2026 social media management platform'
}

export default function DocumentationOverviewPage() {
  return (
    <DocumentationLayout 
      title="Documentation Overview" 
      description="Everything you need to customize, deploy, and run your Light-Speed 2026 platform"
    >
      <div className="space-y-8">
        
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-3">🚀 Welcome to Light-Speed 2026</h2>
          <p className="text-purple-100 mb-4">
            You now have access to a complete social media management SaaS platform. This documentation 
            will guide you through setup, customization, and deployment to get your business running.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/portal/documentation/setup/installation">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                📥 Start with Installation
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button 
                variant="secondary" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                🎯 Try the Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Setup Section */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
              <span className="mr-3">⚙️</span>
              Setup & Installation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Get your development environment ready and launch Light-Speed 2026 locally.
            </p>
            <div className="space-y-3 mb-6">
              <Link href="/portal/documentation/setup/installation" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">Installation Guide</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Download, install dependencies, and run locally</div>
                </div>
              </Link>
              <Link href="/portal/documentation/setup/environment" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">Environment Setup</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Configure API keys and external services</div>
                </div>
              </Link>
              <Link href="/portal/documentation/setup/first-run" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">First Run Verification</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Verify your installation is working correctly</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Customization Section */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
              <span className="mr-3">🎨</span>
              Customization
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Transform the template to match your brand and configure social platforms.
            </p>
            <div className="space-y-3 mb-6">
              <Link href="/portal/documentation/customization/branding" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">Branding Guide</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Customize colors, logos, and content</div>
                </div>
              </Link>
              <Link href="/portal/documentation/customization/platforms" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">Platform Configuration</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Set up Twitter, LinkedIn, Instagram integrations</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Deployment Section */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
              <span className="mr-3">🚀</span>
              Deployment
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Launch your platform to production with reliable hosting solutions.
            </p>
            <div className="space-y-3 mb-6">
              <Link href="/portal/documentation/deployment/pocketbase" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">PocketBase Backend</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Deploy your database and API to production</div>
                </div>
              </Link>
              <Link href="/portal/documentation/deployment/frontend" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">Frontend Deployment</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Deploy your Next.js app to Vercel, Netlify, or AWS</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Examples Section */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
              <span className="mr-3">💡</span>
              Industry Examples
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              See Light-Speed 2026 customized for different industries and use cases.
            </p>
            <div className="space-y-3 mb-6">
              <Link href="/portal/documentation/examples/fitness" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">🏋️ FitLife Social (Fitness)</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Platform customized for fitness professionals</div>
                </div>
              </Link>
              <Link href="/portal/documentation/examples/ecommerce" className="block">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="font-medium text-slate-900 dark:text-slate-100">🛍️ ProductFlow Pro (E-commerce)</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Platform optimized for online stores</div>
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Quick Start Path */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            🎯 Recommended Learning Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Install & Setup</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Get the platform running locally on your machine</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Customize Branding</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Make it yours with logos, colors, and content</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Configure Platforms</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Connect social media APIs and integrations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Deploy to Production</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Launch your SaaS platform for customers</p>
            </div>
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}