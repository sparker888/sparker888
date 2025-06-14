import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoGravital from '@/images/logos/gravital-icon.png'
import logoMidjourney from '@/images/logos/key-prompt-ninja-avatar-250round-trans.png'
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

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
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
            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="w-8 h-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base italic font-extrabold font-display text-slate-800 dark:text-slate-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 flex mt-6 text-sm font-medium transition text-slate-400 group-hover:text-amber-500 dark:text-slate-200">
              <LinkIcon className="flex-none w-6 h-6" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
