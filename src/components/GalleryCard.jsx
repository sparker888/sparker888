import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GalleryCard({ as, className, children, imageSrc }) {
  let Component = as ?? 'div'

  const imageWidth = 400 
  const imageHeight = 400 

  return (
    <Component className={clsx(className, 'group relative flex items-start')}>
      <div className="relative h-full w-1/3 min-w-[11rem] p-2 mt-4 z-10">
        <Image
          src={imageSrc}
          alt=""
          width={imageWidth}
          height={imageHeight}
          sizes="(min-width: 640px) 18rem, 11rem"
          className="absolute inset-0 h-full w-full object-cover rounded-lg" // Add rounded-lg to round the corners
          style={{ transform: 'rotate(-2deg)' }}
          layout="responsive"
        />
      </div>
      <div className="flex w-3/4 pl-10 flex-col">{children}</div>
    </Component>
  )
}

GalleryCard.Link = function GalleryCardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

GalleryCard.Title = function GalleryCardTitle({ as, href, children }) {
  let Component = as ?? 'h2'

  return (
    <Component className="font-display font-extrabold italic tracking-tight text-slate-800 dark:text-slate-100">
      {href ? (
        <GalleryCard.Link href={href} target="_blank">{children}</GalleryCard.Link>
      ) : (
        children
      )}
    </Component>
  )
}

GalleryCard.Description = function GalleryCardDescription({ children }) {
  return (
    <p className="relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400">
      {children}
    </p>
  )
}

GalleryCard.Cta = function GalleryCardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-amber-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

GalleryCard.Eyebrow = function GalleryCardEyebrow({
  as,
  decorate = false,
  className,
  children,
  ...props
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-sky-800 dark:text-sky-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-slate-200 dark:bg-slate-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
