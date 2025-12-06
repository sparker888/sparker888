import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import AnimateIn from '@/components/AnimateIn'
import TypewriterText from '@/components/TypewriterText'
import Photos from '@/components/Photos'
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
  // Get thumbnail for article
  const getThumbnailSrc = (slug) => {
    const thumbnailMap = {
      'nov-2025': '/article-thumbnails/nov-2025.png',
      'light-speed-7': '/article-thumbnails/light-speed-7.png',
      'light-speed-6': '/article-thumbnails/light-speed-6.png',
      'light-speed-5': '/article-thumbnails/light-speed-5.png',
      'light-speed-4': '/article-thumbnails/light-speed-4.png',
      'light-speed-3': '/article-thumbnails/light-speed-3.png',
      'light-speed-2': '/article-thumbnails/light-speed-2.png',
      'light-speed-1': '/article-thumbnails/light-speed-1.png',
      'april-7-update': '/article-thumbnails/april-7-update.webp',
      'march-25-update': '/article-thumbnails/march-25-update.webp',
      'jan-25-update': '/article-thumbnails/jan-25-update.png',
      'december-update': '/article-thumbnails/december-update.png',
      'mpm-theme-updates': '/article-thumbnails/mpm-theme-updates.gif',
      'introducing-artist-styles': '/article-thumbnails/introducing-artist-styles.png',
      'mid-july-update': '/article-thumbnails/mid-july-update.png',
      'midjourney-prompt-manager-alpha-update': '/article-thumbnails/midjourney-prompt-manager-alpha-update.png',
      'top-tactics-for-growth': '/article-thumbnails/top-tactics-for-growth.jpg',
      'joining-forces-with-wheel-rail-seminars': '/article-thumbnails/joining-forces-with-wheel-rail-seminars.png',
      'skyline-intruders-unmasking-outlaws-of-the-open-sky': '/article-thumbnails/skyline-intruders-unmasking-outlaws-of-the-open-sky.png',
      'introducing-midjourney-prompt-manager': '/article-thumbnails/introducing-midjourney-prompt-manager.png',
    }
    return thumbnailMap[slug] || null
  }

  const thumbnailSrc = getThumbnailSrc(article.slug)

  return (
    <AnimateIn>
      <Card as="article">
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        {thumbnailSrc && (
          <div className="relative z-10 w-full aspect-[16/9] mt-3 mb-4 rounded-lg overflow-hidden">
            <Image
              src={thumbnailSrc}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>
        )}
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </AnimateIn>
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
        <Image src={role.logo} alt="" className="h-7 w-7" width={28} height={28} />
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
    <AnimateIn delay={0.2}>
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
    </AnimateIn>
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


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 2)

  return (
    <>
      <Container className="mt-16">
        <AnimateIn delay={0.1}>
          <div className="max-w-2xl">
            <h1 className="text-4xl italic font-extrabold tracking-tight font-display text-slate-800 dark:text-slate-100 sm:text-5xl">
              Hey, I'm Steve.
              <br />
              Your Light. Speed.✨ Growth Builder.
              <br />
              <TypewriterText />
            </h1>
            <p className="mt-6 text-2xl font-medium md:mt-12 text-slate-600 dark:text-slate-400">
              I help businesses and solopreneurs build fast websites and web apps that grow audiences, using modern architecture and AI as the founder of{' '}
              <Link
                href="https://gravitaldigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-500 hover:underline"
              >
                Gravital Digital
              </Link>
              .
            </p>

            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              <span className="font-medium text-sky-600 dark:text-sky-400">What does that look like?</span> Read my article{' '}
              <Link
                href="/articles/light-speed-6"
                className="text-amber-500 hover:underline"
              >
                A Full-featured App in 30 Days with Claude AI{' '}
              </Link>
              where I built{' '}
              <Link
                href="https://midjourneypromptmanager.com/?utm_source=sparker888&utm_medium=website&utm_campaign=mpm_referral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                Midjourney Prompt Manager
              </Link>{' '}
              using a lightweight tech stack and an AI-assisted development process.
            </p>

            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              <span className="font-medium text-sky-600 dark:text-sky-400">What are the results?</span> Check out this{' '}
              <Link
                href="/videos"
                className="text-amber-500 hover:underline"
              >
                Case Study
              </Link>{' '}
              where I helped WRS significantly increase traffic, conversions and attendance to their WRI 2024 engineering conference.
            </p>

            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              <span className="font-medium text-sky-600 dark:text-sky-400">Want to see the solopreneur lifestyle in action?</span> Check out my{' '}
              <Link
                href="/videos"
                className="text-amber-500 hover:underline"
              >
                Remote Solopreneur videos
              </Link>{' '}
              where I share real experiences living and vibe coding in Cuenca, Ecuador – Latin America's safest big city.
            </p>
            <p className="mt-6 text-xl font-semibold text-sky-600 dark:text-sky-400">
              Let's fly! 🚀
            </p>
            <div className="flex gap-6 mt-6 text-sky-600 dark:text-amber-500">
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
              <SocialLink
                href="https://instagram.com/sparker808"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            </div>
          </div>
        </AnimateIn>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <AnimateIn delay={0.1}>
              <NewsletterWithNoSSR />
            </AnimateIn>
            <Projects />
          </div>
        </div>
      </Container>
    </>
  )
}
