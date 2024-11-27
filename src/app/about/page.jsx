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
import portraitImage from '@/images/sparker-1976-portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-slate-800 hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-slate-500 group-hover:fill-amber-500" />
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

// Add the YouTubeIcon component
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.6 4.9 12 4.9 12 4.9h-.1s-4.6 0-6.9.2c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.7.2 6.7.2s4.6 0 6.9-.2c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zm-12 5.2V9l4.8 2.1L9.8 13.2z"
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
              className="object-cover aspect-square rotate-3 rounded-2xl bg-slate-100 dark:bg-slate-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-semibold tracking-tight font-display text-slate-800 sm:text-5xl dark:text-slate-100">
            Growing up on the Space Coast, technology became a way of life.
          </h1>
          <div className="mt-6 text-base space-y-7 text-slate-600 dark:text-slate-400">
            <p>
              Growing up on the Space Coast, my childhood was steeped in the
              awe-inspiring backdrop of the space program, where rockets soared
              to the moon and young minds were fascinated by the potential of
              future technologies.
            </p>

            <p>
              As a child, I often imagined myself piloting those starships, a
              fantasy that later evolved into a love for flight in all its
              forms. Today, as an FAA-certified drone pilot, I capture the world
              from the skies, adding a unique perspective to my work in
              photography and Midjourney image creation.
            </p>

            <p>
              My journey into web development began in the nascent days of the
              internet, with my first website created in 1996. This early
              venture was the foundation for a career that led to work with
              major brands like VHA, Blue Cross and Blue Shield, and Maui Ocean
              Center, where I oversaw digital marketing programs. These
              experiences have honed my skills in blending technical expertise
              with creative imagery.
            </p>

            <p>
              Now, I help my clients excel in the digital space through my own
              company,{' '}
              <a
                href="https://gravitaldigital.com"
                className="text-amber-600"
                target="blank"
              >
                Gravital Digital
              </a>
              , by producing websites using the principles of Jamstack
              architecture, which mirror the meticulous and visionary approach
              of the space industry I grew up around. This methodology allows me
              to craft digital experiences that are on the cutting edge of
              technology and drive value for brands I help to manage.
            </p>

            <p>
              My life's journey is a testament to the power of childhood wonder
              and the enduring influence of early experiences on the Space Coast
              of Florida.
            </p>
          </div>
        </div>
        <div className="font-display lg:pl-20">
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
            {/* Add the YouTube SocialLink here */}
            <SocialLink
              href="https://www.youtube.com/@remote-solopreneur"
              aria-label="Subscribe on YouTube"
              icon={YouTubeIcon}
              className="mt-4"
            >
              Subscribe on YouTube
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}