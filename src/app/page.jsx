import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YTIcon,
} from '@/components/SocialIcons'
import logoGravital from '@/images/logos/gravital-icon.png'
import logoMidjourney from '@/images/logos/key-prompt-ninja-avatar.png'
import logoWRI25HH from '@/images/logos/WRI25HH-icon.png'
import logoWRI25RT from '@/images/logos/WRI25RT-icon.png'
import logoWRS from '@/images/logos/wrs-icon.png'
import logoPrestonStudios from '@/images/logos/preston-studios-icon.png'
import logoBenevolent from '@/images/logos/benevolent-icon.png'
import logoTTC from '@/images/logos/ttc-icon.png'
import logoIAAPA from '@/images/logos/IAAPA-icon.webp'
import logoBRigby from '@/images/logos/brigby-icon.png'
import image1 from '@/images/photos/gravital.png'
import image2 from '@/images/photos/wri25hh.png'
import image3 from '@/images/photos/mpm.webp'
import image4 from '@/images/photos/wri25rt.png'
import image5 from '@/images/photos/image35.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

// Dynamically import Newsletter as a client-side component
const NewsletterWithNoSSR = dynamic(
  () => import('@/components/Newsletter'),
  { ssr: false }, // Disable server-side rendering for this component
)

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.75 4.75L11.25 8m0 0-3.5 3.25M11.25 8H2.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-sky-500 group-hover:fill-sky-600 dark:fill-amber-500 dark:group-hover:fill-amber-600" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-wrap flex-auto gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="flex-none w-full font-display text-slate-900 dark:text-slate-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 dark:text-slate-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 dark:text-slate-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Projects() {
  let projects = [
    {
      company: 'Gravital Digital',
      title: 'Founder & President',
      logo: logoGravital,
      start: '2011',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Midjourney Prompt Manager',
      title: 'Founder & President',
      logo: logoMidjourney,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Wheel Rail Seminars',
      title: 'Event Technologist',
      logo: logoWRS,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'WRI 2025 HH Kansas City',
      title: 'Web Developer & Cvent Tech',
      logo: logoWRI25HH,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'WRI 2025 RT Seattle',
      title: 'Web Developer & Cvent Tech',
      logo: logoWRI25RT,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Preston Studios',
      title: 'Web Designer and Photographer',
      logo: logoPrestonStudios,
      start: '1989',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Benevolent Senior Services',
      title: 'Web Designer',
      logo: logoBenevolent,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'TTC Conference & Tour',
      title: 'Web Developer and Designer',
      logo: logoTTC,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'IAAPA',
      title: 'Web Analytics',
      logo: logoIAAPA,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Barry Rigby, Esq.',
      title: 'Web Designer',
      logo: logoBRigby,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="p-6 border rounded-2xl border-slate-100 dark:border-slate-700/40">
      <h2 className="flex italic font-extrabold font-display text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Brands & Sites Managed</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/projects"
        variant="secondary"
        className="w-full mt-6 group"
      >
        Info and links
        <ArrowRightIcon className="w-4 h-4 transition stroke-slate-400 group-active:stroke-slate-600 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
      </Button>
    </div>
  )
}

function ExternalLinkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
  // Project data with placeholder URLs - update these with your actual project URLs
  const projects = [
    { image: image1, url: 'https://gravitaldigital.com', title: 'Project 1' },
    { image: image2, url: 'https://wri2025hh.wheel-rail-seminars.com', title: 'Project 2' },
    { image: image3, url: 'https://midjourneypromptmanager.com', title: 'Project 3' },
    { image: image4, url: 'https://wri2025rt.wheel-rail-seminars.com', title: 'Project 4' },
    { image: image5, url: 'https://prestonstudios.com', title: 'Project 5' },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {projects.map((project, projectIndex) => (
          <Link
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 sm:w-72 sm:rounded-2xl dark:bg-slate-800 group transition-transform duration-300 hover:scale-105',
              rotations[projectIndex % rotations.length],
            )}
          >
            <Image
              src={project.image}
              alt={project.title}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
            {/* Overlay with external link icon */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100">
              <div className="absolute bottom-4 right-4">
                <ExternalLinkIcon className="w-6 h-6 stroke-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl italic font-extrabold tracking-tight font-display text-slate-800 sm:text-5xl dark:text-slate-100">
            I'm Steve. I'm a marketing guy that likes to build fast websites.
          </h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            I produce Light. Speed.✨ websites & apps as the Founder of{' '}
            <Link
              href="https://gravitaldigital.com/"
              className="text-amber-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gravital Digital
            </Link>
            . My passion is delivering incredible value for my clients.{' '}
            </p>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            <em>Recent win:</em>  Here's a{' '}
            <Link
              href="https://gravital-wri-case-study.netlify.app/"
              className="text-amber-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jamstack redesign case study{' '}
            </Link>
            showing how its new, modern website helped WRI 2024 attract 22.5% more site traffic and 30% more conference attendees!
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            Read about my latest Light. Speed.✨ project:{' '}
            <Link
              href="/articles/light-speed-6"
              className="text-amber-500 hover:underline"
            >
              A Full-featured Application in 30-days with Claude AI
            </Link>
            , featuring{' '}
            <Link
              href="https://midjourneypromptmanager.com/"
              className="text-amber-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Midjourney Prompt Manager{' '}
            </Link>
            for the AI image creation community.
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            <em>Fellow solopreneur?</em> Check out my video series on working abroad
            and my recent six-months stay in Cuenca, Ecuador on my{' '}
            <Link
              href="https://www.youtube.com/@remote-solopreneur"
              className="text-amber-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube channel{' '}
            </Link>
            .
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            Ready to build something fast?{' '}
            <Link
              href="/contact"
              className="text-amber-500 hover:underline"
            >
            Let's connect! {' '}
            </Link>
            🚀
          </p>
          <div className="flex gap-6 mt-6 text-sky-600 dark:text-amber-500">
            <SocialLink
              href="https://instagram.com/sparker808"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/sparker888"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://x.com/sparker888"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/sparker888"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.youtube.com/@remote-solopreneur"
              aria-label="Subscribe on YouTube"
              icon={YTIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NewsletterWithNoSSR />
            <Projects />
          </div>
        </div>
      </Container>
    </>
  )
}
