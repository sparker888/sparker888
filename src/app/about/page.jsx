import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/sparker-1976-portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-slate-800 transition hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-amber-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            Growing up on the Space Coast, future tech is a way of life.
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
            <p>
              Growing up on the Space Coast, my childhood was steeped in the
              awe-inspiring backdrop of the space program, with an engineer
              father playing a supporting role in the Apollo chapter of space
              exploration. This environment, where rockets soared to the moon
              and dreams turned into reality, was the perfect incubator for a
              young mind fascinated by the potential of future technologies.
            </p>

            <p>
              1979 was a pivotal year, not just because of my astronaut costume,
              but because it was when I first experienced the magic of "Star
              Wars" in theaters. That moment, watching starships battle across
              the screen, was transformative. It wasn't just entertainment; it
              was a window into a realm of limitless possibilities, a future
              where technology and imagination merged seamlessly. This early
              exposure to a universe so vividly brought to life by cutting-edge
              effects fueled my passion for working with future tech.
            </p>

            <p>
              As a child, I often imagined myself piloting those starships, a
              fantasy that later evolved into a love for flight in all its
              forms. Today, as an FAA-certified drone pilot, I capture the world
              from the skies, adding a unique perspective to my work in
              photography and web development. This love for visual storytelling
              is complemented by my degree in Communications from Florida State
              University, earned in 1989, which has been instrumental in my
              approach to digital branding and design.
            </p>

            <p>
              My journey into web development began in the nascent days of the
              internet, with my first website created in 1996. This early
              venture was the foundation for a career that led to collaborations
              with major brands like VHA, Blue Cross and Blue Shield, and
              Gannett, where I oversaw website and digital marketing programs.
              These experiences have honed my skills in blending technical
              expertise with creative storytelling.
            </p>

            <p>
              Now, to help my clients excel in the digital space, I embrace the
              principles of{' '}
              <a
                href="https://gravitaldigital.com"
                className="text-amber-600"
                target="blank"
              >
                Jamstack architecture
              </a>
              , which mirror the meticulous and visionary approach of the space
              industry I grew up around. This methodology allows me to craft
              digital experiences that are not only technologically advanced but
              also narratively compelling.
            </p>

            <p>
              My life's journey is a testament to the power of childhood wonder
              and the enduring influence of early experiences. From watching
              starships in "Star Wars" to capturing the world from above, my
              story is about the continual pursuit of merging technology with
              creativity, one project at a time.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/sparker888"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/sparker808"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/sparker888"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/sparker888"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
