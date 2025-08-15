import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import Image from 'next/image'

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )
}

const resourceCategories = [
  {
    id: 'development',
    title: 'Light. Speed. Development',
    description: 'Modern tools for rapid web development and AI-assisted coding',
    icon: '⚡',
    resources: [
      {
        name: 'Claude Code',
        description: 'AI-powered development assistant that transformed my workflow. Essential for solopreneurs building digital products.',
        url: 'https://docs.anthropic.com/en/docs/claude-code',
        category: 'AI Development',
        featured: true,
        price: 'Free with Claude Pro'
      },
      {
        name: 'Next.js',
        description: 'React framework for production-grade applications. Perfect for building fast, SEO-friendly websites.',
        url: 'https://nextjs.org/',
        category: 'Framework',
        price: 'Free'
      },
      {
        name: 'Astro',
        description: 'The web framework I used to build Midjourney Prompt Manager. Incredible performance for content-driven sites.',
        url: 'https://astro.build/',
        category: 'Framework',
        featured: true,
        price: 'Free'
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework. Makes responsive design effortless and maintains consistency across projects.',
        url: 'https://tailwindcss.com/',
        category: 'Styling',
        price: 'Free'
      },
      {
        name: 'Vercel',
        description: 'Deploy websites instantly with zero configuration. My go-to hosting platform for client projects.',
        url: 'https://vercel.com/',
        category: 'Hosting',
        price: 'Free tier available'
      }
    ]
  },
  {
    id: 'remote-work',
    title: 'Remote Work Setup',
    description: 'Tools and systems for productivity and location independence',
    icon: '🏝️',
    resources: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for project management, documentation, and client communication.',
        url: 'https://notion.so/',
        category: 'Productivity',
        featured: true,
        price: 'Free tier available'
      },
      {
        name: 'Loom',
        description: 'Screen recording for client communications. Essential for remote client relationships.',
        url: 'https://loom.com/',
        category: 'Communication',
        price: 'Free tier available'
      },
      {
        name: 'Cal.com',
        description: 'Open-source scheduling platform. Perfect for managing client calls across time zones.',
        url: 'https://cal.com/',
        category: 'Scheduling',
        price: 'Free'
      },
      {
        name: 'Obsidian',
        description: 'Knowledge management system for organizing ideas, notes, and business insights.',
        url: 'https://obsidian.md/',
        category: 'Knowledge Management',
        price: 'Free'
      },
      {
        name: 'Stripe',
        description: 'Payment processing for digital products. Used in Midjourney Prompt Manager for subscriptions.',
        url: 'https://stripe.com/',
        category: 'Payments',
        featured: true,
        price: 'Transaction fees'
      }
    ]
  },
  {
    id: 'ecuador-resources',
    title: 'Ecuador & Latin America',
    description: 'Essential resources for living and working in Latin America',
    icon: '🇪🇨',
    resources: [
      {
        name: 'Ecuador Visa Guide',
        description: 'Complete guide to tourist and temporary resident visas for Ecuador. Based on my personal experience.',
        url: '/articles/ecuador-visa-guide', // Internal link - you'll need to create this article
        category: 'Immigration',
        featured: true,
        price: 'Free'
      },
      {
        name: 'Cuenca Cost of Living Calculator',
        description: 'Real-world cost breakdowns from my 6 months in Ecuador. Includes housing, food, and utilities.',
        url: '/articles/ecuador-cost-living', // Internal link - you'll need to create this article
        category: 'Cost of Living',
        featured: true,
        price: 'Free'
      },
      {
        name: 'Nomad List',
        description: 'Data on cost of living, internet speed, and safety for cities worldwide. Great for location research.',
        url: 'https://nomadlist.com/',
        category: 'Research',
        price: 'Free'
      },
      {
        name: 'Wise (formerly TransferWise)',
        description: 'Multi-currency account and money transfers. Essential for managing finances while abroad.',
        url: 'https://wise.com/',
        category: 'Finance',
        featured: true,
        price: 'Low fees'
      },
      {
        name: 'Google Fi',
        description: 'International phone service that works seamlessly in Ecuador and most Latin American countries.',
        url: 'https://fi.google.com/',
        category: 'Communication',
        price: '$20+/month'
      },
      {
        name: 'Ecuador Facebook Groups',
        description: 'Active expat communities: "Cuenca Ecuador Expats", "Gringos in Ecuador", "Ecuador Digital Nomads"',
        url: 'https://facebook.com/',
        category: 'Community',
        price: 'Free'
      }
    ]
  },
  {
    id: 'business-tools',
    title: 'Solopreneur Business',
    description: 'Tools for building and scaling a one-person business',
    icon: '🚀',
    resources: [
      {
        name: 'Gumroad',
        description: 'Sell digital products with zero setup. Perfect for info products and course creation.',
        url: 'https://gumroad.com/',
        category: 'Digital Products',
        price: 'Transaction fees'
      },
      {
        name: 'ConvertKit',
        description: 'Email marketing platform built for creators. Excellent automation and landing page builder.',
        url: 'https://convertkit.com/',
        category: 'Email Marketing',
        featured: true,
        price: 'Free tier available'
      },
      {
        name: 'Canva',
        description: 'Design tool for social media, presentations, and marketing materials. No design skills required.',
        url: 'https://canva.com/',
        category: 'Design',
        price: 'Free tier available'
      },
      {
        name: 'Midjourney',
        description: 'AI image generation that powers my Prompt Manager business. Game-changer for visual content.',
        url: 'https://midjourney.com/',
        category: 'AI Content',
        featured: true,
        price: '$10+/month'
      },
      {
        name: 'Dub.co',
        description: 'Link management and analytics. Great for tracking marketing campaigns and social sharing.',
        url: 'https://dub.co/',
        category: 'Analytics',
        price: 'Free tier available'
      }
    ]
  }
]

function ResourceCard({ resource }) {
  const isInternal = resource.url.startsWith('/')
  
  return (
    <div className="relative p-6 transition-all duration-200 bg-white border group rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 hover:border-amber-300 dark:hover:border-amber-600">
      {resource.featured && (
        <div className="absolute -top-2 -right-2">
          <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white rounded-full bg-amber-500">
            <StarIcon className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold transition-colors text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
            {resource.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">
              {resource.category}
            </span>
          </div>
        </div>
        
        <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
            {resource.price}
          </span>
          
          <Link
            href={resource.url}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400"
          >
            {isInternal ? 'Read Guide' : 'Visit Site'}
            {!isInternal && <ExternalLinkIcon className="w-3 h-3" />}
          </Link>
        </div>
      </div>
    </div>
  )
}

function ResourceCategory({ category }) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{category.icon}</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {category.title}
          </h2>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {category.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.resources.map((resource) => (
          <ResourceCard key={resource.name} resource={resource} />
        ))}
      </div>
    </section>
  )
}

export const metadata = {
  title: 'Resources - Remote Solopreneur Tools',
  description: 'Curated tools and resources for building a location-independent business. From development tools to Ecuador living guides.',
}

export default function Resources() {
  return (
    <SimpleLayout
      title="Remote Solopreneur Resources 🛠️"
      intro="Curated tools, guides, and resources I actually use to build digital products, manage remote work, and live abroad. Updated from my real-world experience as a solopreneur."
    >
      {/* Featured Resources Banner */}
      <div className="p-8 mb-16 border bg-gradient-to-r from-amber-50 to-sky-50 dark:from-amber-900/20 dark:to-sky-900/20 rounded-2xl border-amber-200 dark:border-amber-800">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
            🌟 My Essential Stack
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-lg text-slate-600 dark:text-slate-400">
            These are the exact tools I used to build <strong>Midjourney Prompt Manager</strong> in 30 days, 
            manage clients remotely, and live comfortably in Ecuador for 6 months while growing my business.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
              Claude Code
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200">
              Astro
            </span>
            <span className="px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-200">
              Notion
            </span>
            <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-200">
              Wise
            </span>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      {resourceCategories.map((category) => (
        <ResourceCategory key={category.id} category={category} />
      ))}

      {/* Bottom CTA */}
      <div className="p-8 mt-16 border bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-slate-200 dark:border-slate-700">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Questions About Any of These Tools?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-slate-600 dark:text-slate-400">
            I've tested all of these resources personally. Reach out if you want specific guidance 
            on how I use them in my solopreneur workflow.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-amber-600 hover:bg-amber-700"
            >
              Get in Touch
            </Link>
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-sky-600 hover:bg-sky-700"
            >
              Watch Tool Reviews
            </Link>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}