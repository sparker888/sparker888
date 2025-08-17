import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Customer Portal - Light-Speed 2026',
  description: 'Access your Light-Speed 2026 social media management platform resources, documentation, and customer portal'
}

export default function PortalHomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Light-Speed 2026
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Your complete social media management platform is ready to customize and deploy. 
            Everything you need to launch your SaaS business is right here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal/documentation">
              <Button className="bg-white text-slate-900 hover:bg-gray-100 font-semibold">
                📚 View Documentation
              </Button>
            </Link>
            <Link href="/portal/dashboard">
              <Button variant="secondary" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                🎯 Try Dashboard Preview
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Documentation */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Complete Documentation</h3>
            <p className="text-slate-400 mb-4">
              Step-by-step guides for installation, customization, and deployment of your social media platform.
            </p>
            <Link href="/portal/documentation">
              <Button variant="secondary" className="w-full bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                Browse Docs →
              </Button>
            </Link>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Dashboard</h3>
            <p className="text-slate-400 mb-4">
              Experience the customer dashboard with real social media management features and analytics.
            </p>
            <Link href="/portal/dashboard">
              <Button variant="secondary" className="w-full bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                Try Dashboard →
              </Button>
            </Link>
          </div>

          {/* Video Tutorials */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Video Walkthrough</h3>
            <p className="text-slate-400 mb-4">
              Watch comprehensive tutorials covering setup, customization, and deployment processes.
            </p>
            <Button variant="secondary" className="w-full bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
              Coming Soon
            </Button>
          </div>

        </div>

        {/* Features Overview */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What's Included in Light-Speed 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Full-Stack Platform</h3>
              <p className="text-sm text-slate-300">Next.js + PocketBase</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Social Platforms</h3>
              <p className="text-sm text-slate-300">Twitter, LinkedIn, Instagram+</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Payment Ready</h3>
              <p className="text-sm text-slate-300">Stripe Integration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-white mb-1">Analytics</h3>
              <p className="text-sm text-slate-300">Performance Tracking</p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Begin with our installation guide to set up your development environment, 
            then explore customization options and deployment strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal/documentation/setup/installation">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                📥 Start Installation
              </Button>
            </Link>
            <Link href="/portal/documentation/examples/fitness">
              <Button variant="secondary" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                🏋️ View Examples
              </Button>
            </Link>
          </div>
        </div>

    </div>
  )
}