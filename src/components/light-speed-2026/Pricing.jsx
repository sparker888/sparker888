import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import AnimateIn from '@/components/AnimateIn'

const pricingPlans = [
  {
    name: 'Template Only',
    price: '$197',
    description: 'Perfect for developers who want to build on their own',
    features: [
      'Complete source code',
      'Next.js 14 + TypeScript',
      'Authentication system',
      'Database schema',
      'UI components library',
      'Documentation',
      'Basic setup guide',
    ],
    cta: 'Get Template',
    popular: false,
  },
  {
    name: 'Template + Setup',
    price: '$297',
    description: 'Includes personalized setup assistance and customization',
    features: [
      'Everything in Template Only',
      '1-hour setup consultation',
      'Personalized configuration',
      'Custom branding setup',
      'Deployment assistance',
      'Priority email support',
      '30-day support window',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Full Service',
    price: '$497',
    description: 'Complete white-label solution with ongoing support',
    features: [
      'Everything in Template + Setup',
      'Complete customization',
      'Your branding throughout',
      'Custom domain setup',
      '3 months of support',
      'Feature customization',
      'Launch strategy consultation',
    ],
    cta: 'Launch Now',
    popular: false,
  },
]

const faqs = [
  {
    question: 'What exactly do I get with the template?',
    answer: 'You get the complete source code for a production-ready social media management platform, including user authentication, dashboard, scheduling system, analytics, payment integration, and more. All built with modern technologies like Next.js 14, TypeScript, and Tailwind CSS.',
  },
  {
    question: 'Can I customize the template for my specific needs?',
    answer: 'Absolutely! The template is designed to be easily customizable. You can modify the UI, add new features, change the branding, and adapt it to your specific business requirements. The code is well-documented and follows best practices.',
  },
  {
    question: 'Do I need technical knowledge to use this template?',
    answer: 'Basic knowledge of React and Next.js is recommended for customization. However, if you choose the "Template + Setup" or "Full Service" options, we provide assistance with setup and customization to get you started quickly.',
  },
  {
    question: 'Is this a one-time purchase or subscription?',
    answer: 'This is a one-time purchase. You own the code and can use it for unlimited projects. There are no recurring fees or subscriptions required.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Support varies by plan. Template Only includes documentation and basic setup guide. Template + Setup includes 1-hour consultation and 30-day email support. Full Service includes 3 months of comprehensive support.',
  },
  {
    question: 'Can I use this for client projects?',
    answer: 'Yes! You have full commercial rights to use this template for your own projects or client work. Build unlimited SaaS applications with this template.',
  },
]

export function LightSpeedPricing() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800">
      <Container>
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Launch Strategy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From DIY template to full-service launch, we have options to fit your needs and timeline.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, index) => (
            <AnimateIn key={plan.name} delay={index * 0.1}>
              <div className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 h-full ${
                plan.popular 
                  ? 'ring-2 ring-amber-500 shadow-2xl scale-105' 
                  : 'shadow-lg'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  href="/contact" 
                  className={`w-full justify-center ${
                    plan.popular 
                      ? 'bg-amber-500 hover:bg-amber-600' 
                      : ''
                  }`}
                  variant={plan.popular ? 'primary' : 'secondary'}
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* FAQ Section */}
        <AnimateIn delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* CTA Section */}
        <AnimateIn delay={0.6}>
          <div className="text-center mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Launch Your SaaS?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the growing community of entrepreneurs who have launched their social media management platforms with Light-Speed 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                className="text-lg px-8 py-4 bg-amber-500 hover:bg-amber-600"
              >
                Get Started Today
              </Button>
              <Button 
                href="/products/light-speed-2026/features" 
                variant="secondary"
                className="text-lg px-8 py-4 bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                View All Features
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}