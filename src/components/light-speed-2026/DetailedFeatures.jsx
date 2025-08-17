import { Container } from '@/components/Container'
import AnimateIn from '@/components/AnimateIn'
import { Button } from '@/components/Button'

const featureCategories = [
  {
    title: 'User Management',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    features: [
      'Complete authentication system with NextAuth.js',
      'User registration and login with email/password',
      'Social login (Google, Twitter, LinkedIn)',
      'Password reset and email verification',
      'User profile management and settings',
      'Role-based access control (Admin, User, Team Member)',
      'Account suspension and moderation tools',
    ],
  },
  {
    title: 'Social Media Integration',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-4 9v8a1 1 0 001 1h16a1 1 0 001-1v-8L17 4M9 9h6M9 13h6" />
      </svg>
    ),
    features: [
      'Connect multiple social media accounts',
      'Twitter/X API integration',
      'LinkedIn API integration',
      'Instagram Basic Display API',
      'Facebook Pages API integration',
      'Account health monitoring',
      'Automatic token refresh and error handling',
    ],
  },
  {
    title: 'Content Creation & Scheduling',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Rich text editor with media support',
      'Image and video upload with optimization',
      'Calendar view for content planning',
      'Bulk content upload via CSV',
      'Content templates and saved drafts',
      'Automated posting at optimal times',
      'Cross-platform content adaptation',
    ],
  },
  {
    title: 'Analytics & Reporting',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'Real-time engagement metrics',
      'Follower growth tracking',
      'Post performance analytics',
      'Competitor analysis tools',
      'Custom reporting dashboard',
      'PDF report generation',
      'Data export capabilities',
    ],
  },
  {
    title: 'Team Collaboration',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      'Multi-user workspace management',
      'Content approval workflows',
      'Team member permissions',
      'Internal commenting system',
      'Task assignment and tracking',
      'Team activity monitoring',
      'Client access portals',
    ],
  },
  {
    title: 'Billing & Subscriptions',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    features: [
      'Stripe payment integration',
      'Multiple subscription tiers',
      'Usage-based billing options',
      'Invoice generation and management',
      'Dunning management for failed payments',
      'Subscription analytics',
      'Coupon and discount codes',
    ],
  },
]

export function DetailedFeatures() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <AnimateIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Complete Feature Overview
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              Light-Speed 2026 includes everything you need to build and launch a professional 
              social media management platform. Here's a detailed breakdown of all features included.
            </p>
          </div>
        </AnimateIn>

        <div className="space-y-16">
          {featureCategories.map((category, index) => (
            <AnimateIn key={category.title} delay={index * 0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mr-6">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                All these features are included in every Light-Speed 2026 package. 
                Choose the support level that's right for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/products/light-speed-2026/pricing" 
                  className="text-lg px-8 py-4 bg-amber-500 hover:bg-amber-600"
                >
                  View Pricing
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="text-lg px-8 py-4 bg-white/10 text-white border border-white/20 hover:bg-white/20"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}