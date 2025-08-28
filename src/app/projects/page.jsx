import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoGravital from '@/images/logos/gravital-icon.png'
import logoMidjourney from '@/images/logos/key-prompt-ninja-avatar.png'
import logoWRI2025HH from '@/images/logos/WRI25HH-icon.png'
import logoWRI2025RT from '@/images/logos/WRI25RT-icon.png'
import logoWRS from '@/images/logos/wrs-icon.png'
import logoTTC from '@/images/logos/ttc-icon.png'
import logoPrestonStudios from '@/images/logos/preston-studios-icon.png'

const projects = [
  {
    name: 'Gravital Digital',
    description: 'Creating Light. Speed.✨ websites and apps.',
    link: {
      href: 'https://gravitaldigital.com/',
      label: 'gravitaldigital.com',
    },
    logo: logoGravital,
  },
  {
    name: 'Midjourney Prompt Manager',
    description: 'Helping marketing pros create and manage Midjourney prompts and images.',
    link: {
      href: 'https://midjourneypromptmanager.com/',
      label: 'midjourneypromptmanager.com',
    },
    logo: logoMidjourney,
  },
  {
    name: 'Wheel Rail Seminars',
    description:
      'The team I work with that produces WRI and other rail industry events.',
    link: {
      href: 'https://wheel-rail-seminars.com/',
      label: 'wheel-rail-seminars.com',
    },
    logo: logoWRS,
  },
  {
    name: 'WRI 2025 Heavy Haul / Kansas City',
    description:
      'The premier heavy haul rail engineering event produced by Wheel Rail Seminars.',
    link: {
      href: 'https://wri2025hh.wheel-rail-seminars.com/',
      label: 'wri2025hh.wheel-rail-seminars.com',
    },
    logo: logoWRI2025HH,
  },
   {
    name: 'WRI 2025 Rail Transit / Seattle',
    description:
      'The premier rail transit engineering event produced by Wheel Rail Seminars.',
    link: {
      href: 'https://wri2025hh.wheel-rail-seminars.com/',
      label: 'wri2025hh.wheel-rail-seminars.com',
    },
    logo: logoWRI2025RT,
  },
  {
    name: 'Preston Studios',
    description:
      'Internationally recognized stained glass art studio and long-time client.',
    link: { href: 'https://prestonstudios.com/', label: 'prestonstudios.com' },
    logo: logoPrestonStudios,
  },
]

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z"
        fill="currentColor"
      />
      <path
        d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: "Cool people I work with and hot projects I'm working on.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Cool people ❄️ I work with and hot projects 🔥 I'm working on."
      intro="I’ve been operating Gravital Digital for over a decade now and I've been lucky enough to collaborate with some very cool and talented people including the team at Wheel Rail Seminars. I'm now building my first digital product, Midjourney Prompt Manager!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex items-center justify-center w-18 h-18 bg-white rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="w-12 h-12"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base italic font-extrabold font-display text-slate-800 dark:text-slate-100">
              <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 flex items-center justify-between mt-6 text-sm font-medium transition text-orange-500 group-hover:text-yellow-500 dark:text-orange-400 dark:group-hover:text-yellow-400">
              <span>{project.link.label}</span>
              <ExternalLinkIcon className="flex-none w-4 h-4 ml-2" />
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
