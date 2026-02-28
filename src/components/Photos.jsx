'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

import AnimateIn from '@/components/AnimateIn'

function ExternalLinkIcon(props) {
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
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

import image1 from '@/images/photos/gravital.png'
import image2 from '@/images/photos/wri26hh.png'
import image3 from '@/images/photos/mpm.webp'
import image4 from '@/images/photos/wri26rt.png'
import image5 from '@/images/photos/image35.jpg'

export default function Photos() {
  let rotations = ['rotate-2', '-rotate-[5deg]', 'rotate-2', 'rotate-2', '-rotate-2']
  const scrollContainerRef = useRef(null)

  // Project data with placeholder URLs - update these with your actual project URLs
  const projects = [
    { image: image1, url: 'https://gravitaldigital.com', title: 'Project 1' },
    {
      image: image2,
      url: 'https://wri2026hh.wheel-rail-seminars.com',
      title: 'Project 2',
      contain: true,
    },
    {
      image: image3,
      url: 'https://midjourneypromptmanager.com',
      title: 'Project 3',
    },
    {
      image: image4,
      url: 'https://wri2026rt.wheel-rail-seminars.com',
      title: 'Project 4',
      contain: true,
    },
    { image: image5, url: 'https://prestonstudios.com', title: 'Project 5' },
  ]

  // Scroll to center card on mobile load
  useEffect(() => {
    const scrollToCenter = () => {
      if (scrollContainerRef.current && window.innerWidth < 640) {
        // Calculate center position: card width (176px) + gap (20px) * 1 card to center on 3rd card
        // We need to scroll past 1 card (not 2) to center the 3rd card
        const centerPosition = (176 + 20) * 1
        scrollContainerRef.current.scrollLeft = centerPosition
      }
    }

    // Small delay to ensure DOM is ready
    setTimeout(scrollToCenter, 100)
    
    // Also scroll on resize if switching from desktop to mobile
    window.addEventListener('resize', scrollToCenter)
    return () => window.removeEventListener('resize', scrollToCenter)
  }, [])

  return (
    <AnimateIn delay={0.3}>
      <div className="mt-16 sm:mt-20">
        <div ref={scrollContainerRef} className="flex justify-start gap-5 py-4 -my-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 sm:gap-8 sm:overflow-hidden sm:px-0 sm:justify-center">
          {projects.map((project, projectIndex) => (
            <Link
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 transition-transform duration-300 hover:scale-105 dark:bg-slate-800 sm:w-72 sm:rounded-2xl photo-card-glow snap-center',
                rotations[projectIndex % rotations.length],
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                sizes="(min-width: 640px) 18rem, 11rem"
                className={`absolute inset-0 w-full h-full ${project.contain ? 'object-contain p-4' : 'object-cover'}`}
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
    </AnimateIn>
  )
}