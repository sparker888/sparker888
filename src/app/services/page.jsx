import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import Image from 'next/image'

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ServiceCard({ name, price, description, deliverableNote, deliverables, timeline, imageSrc }) {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 border rounded-2xl border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 hover:border-amber-500/50 dark:hover:border-amber-500/50">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-amber-500">{name}</h3>
        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{price}</p>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
        {deliverableNote && (
          <p className="mt-3 text-sm text-sky-500 dark:text-sky-400">{deliverableNote}</p>
        )}
        <ul className="flex-1 mt-6 space-y-3">
          {deliverables.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
              <CheckIcon className="flex-none w-4 h-4 mt-0.5 text-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700/50">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Timeline: <span className="text-slate-900 dark:text-slate-100">{timeline}</span>
          </p>
        </div>
        <div className="pt-6 mt-auto">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  )
}

const packages = [
  {
    name: 'AI Creative Strategy Session',
    price: 'Starting at $2,500',
    description:
      "I begin with a focused two-hour review of your current workflow and production requirements, then do the analysis and deliver a written roadmap: recommended models, prompt architecture, workflow design, and an implementation sequence prioritized by impact. Take it and run, or engage me to implement it.",
    deliverableNote: 'Deliverable: Written strategy report + model recommendations + workflow diagram',
    deliverables: [
      'Current workflow assessment and gap analysis',
      'Model evaluation matched to your creative requirements (image, video, or both)',
      'Tool and platform recommendations with cost projections',
      'Workflow design for integrating AI generation into existing processes',
      'Asset management strategy for AI-generated content',
      'Detailed strategy document with prioritized implementation roadmap',
    ],
    timeline: 'Delivered within 5 business days',
    imageSrc: '/images/service-1.webp',
  },
  {
    name: 'Strategy & Implementation',
    price: 'Starting at $7,500',
    description:
      "I start with a strategy review of your current setup — tools, models and workflows — then design and implement a connected system around what you already have. I recommend the right models, develop a prompting strategy, and establish an asset management workflow. Your team reviews and validates the system throughout, and walks away with documentation they can use independently.",
    deliverableNote: 'Deliverable: Configured system + prompt library + team training documentation',
    deliverables: [
      'Tool and model assessment against your current workflow',
      'Custom prompt library development tailored to your brand and creative standards',
      'Style system creation for maintaining visual consistency across projects',
      'Asset management workflow implementation (organization, tagging, retrieval)',
      'Team training and system review sessions',
      '30-day post-implementation support for questions and adjustments',
    ],
    timeline: '2-3 weeks',
    imageSrc: '/images/service-2.webp',
  },
  {
    name: 'Custom AI Image System Build',
    price: 'Starting at $15,000',
    description:
      "I architect and build a custom AI image generation system tailored to your team's workflow — integrating your tool stack, selecting and configuring the right models, building prompt intelligence and asset pipeline infrastructure, plus team documentation and two hands-on training sessions. You own everything — and I'm available for ongoing maintenance, updates, and support as your system evolves. I built Midjourney Prompt Manager from concept to production in 30 days using this exact approach.",
    deliverableNote: 'Deliverable: Complete AI image generation system + documentation + 2 live training sessions',
    deliverables: [
      'Prompt agent setup and training',
      '1,500+ style library integration',
      'Model selection and API configuration',
      'Asset pipeline architecture',
      'Team workflow documentation',
      '2 training sessions',
    ],
    timeline: '4-6 weeks',
    imageSrc: '/images/service-3.webp',
  },
]

export const metadata = {
  title: 'AI Creative Strategy Services | Stephen Parker',
  description:
    'AI generation strategy, implementation, and custom development for studios and marketing teams. From model evaluation to custom tool development.',
}

export default function Services() {
  return (
    <SimpleLayout
      title="AI ImageGen Management Services"
      intro={
        <span className="text-4xl text-sky-600 dark:text-sky-400">
          From strategy to implementation, I help creative teams optimize their AI generation tools and workflows to produce better work, faster.
        </span>
      }
    >
      {/* Introduction */}
      <div className="max-w-3xl -mt-8">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          If you're like many teams that jumped into AI image and video generation early, you might relate.
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Now you've got five tools, no consistent workflow, assets scattered everywhere, and costs that keep climbing. New models drop every week and each one promises to be the best. Meanwhile, the work that's supposed to get easier keeps getting more complicated.
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          I've spent the past two years building in this space, not just experimenting. I created two production platforms, tested dozens of models in real workflows, and solved the exact problems you're dealing with now: organization, consistency, cost control, and long-term creative strategy. I bring that hands-on experience to every engagement.
        </p>
      </div>

      {/* Packages */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Services for Creative Teams
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <ServiceCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="max-w-3xl mt-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Platforms I Work With
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          I have hands-on production experience with Midjourney, Kling AI (Elite Creator), FLUX, Google, GPT Image, Nano Banana, Recraft, and 15+ other image and video generation models. On the development side, I build with Astro, Next.js, React, Tailwind CSS, and Claude Code for AI-assisted rapid development.
        </p>
      </div>

      {/* Proof */}
      <div className="max-w-3xl mt-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Built, Not Just Advised
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          I created two platforms that solve the problems that many creators and teams face:
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          <Link
            href="https://midjourneypromptmanager.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-500 hover:underline"
          >
            Midjourney Prompt Manager
          </Link>
          {' '}&mdash; A professional prompt creation and asset management platform for creative teams. 27 AI generation models, Key Prompt creation agent, project-based workflows, team collaboration, copy/paste Key Prompts to all Midjourney models, and a curated library of 1,500+ professional styles. Read about the project story:{' '}
          <Link
            href="https://keypromptninja.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:underline"
          >
            MPM Project Timeline
          </Link>
          .
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          <Link
            href="https://keypromptninja.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-500 hover:underline"
          >
            Key Prompt Ninja
          </Link>
          {' '}&mdash; AI-powered image and video creation for anyone. A trained prompt agent that delivers professional results with a minimal, mobile-friendly interface.
        </p>
      </div>

      {/* CTA */}
      <div className="p-8 mt-16 text-center border bg-gradient-to-r from-amber-50 to-sky-50 dark:from-amber-900/20 dark:to-sky-900/20 rounded-2xl border-amber-200 dark:border-amber-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Let's Talk About Your AI Strategy
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-400">
          Every engagement starts with a conversation. Tell me about your team, your current creative workflow, and where you think AI generation could make an impact. No pitch, no pressure, just an honest assessment of whether I can help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-lg font-semibold text-white transition-colors rounded-lg bg-amber-500 hover:bg-amber-600"
        >
          Get in Touch
        </Link>
      </div>
    </SimpleLayout>
  )
}
