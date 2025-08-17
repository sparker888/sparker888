import { Container } from '@/components/Container'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    title: 'User Authentication & Management',
    description: 'Complete authentication system with registration, login, password reset, and user profile management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Dashboard',
    description: 'Comprehensive dashboard for managing multiple social media accounts and scheduling posts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Content Scheduling',
    description: 'Advanced scheduling system with calendar view, bulk upload, and automated posting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Reporting',
    description: 'Detailed analytics dashboard with engagement metrics, growth tracking, and exportable reports.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Payment Integration',
    description: 'Stripe integration for subscription management, billing, and payment processing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Team Collaboration',
    description: 'Multi-user support with role-based permissions and team workspace management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const techStack = [
  { name: 'Next.js 14', description: 'React framework with app router' },
  { name: 'TypeScript', description: 'Type-safe development' },
  { name: 'Tailwind CSS', description: 'Utility-first styling' },
  { name: 'Prisma', description: 'Database ORM' },
  { name: 'NextAuth.js', description: 'Authentication system' },
  { name: 'Stripe', description: 'Payment processing' },
  { name: 'Vercel', description: 'Deployment platform' },
  { name: 'PostgreSQL', description: 'Database' },
]

export function LightSpeedFeatures() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Light-Speed 2026 comes with all the features and integrations you need to build
              a professional social media management platform.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <AnimateIn key={feature.title} delay={index * 0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Modern Tech Stack
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Built with industry-leading technologies for performance, scalability, and developer experience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-white text-sm">{tech.name}</h4>
                  </div>
                  <p className="text-purple-200 text-xs">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}