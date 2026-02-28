import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import Image from 'next/image'
import VideosClient from '@/components/VideosClient'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="5,3 19,12 5,21" fill="currentColor" />
    </svg>
  )
}

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}


const featuredVideos = [
  {
    id: 'featured-1',
    title: 'Kling 3.0 Multi-Shot Demo with Stephen Parker | Kling AI Elite Creator',
    description: 'Using Midjourney Prompt Manager, Steve shows how to create prompts and images for five elements in this fan production.',
    thumbnail: `https://img.youtube.com/vi/C-TLgxNM_Xo/maxresdefault.jpg`,
    videoId: 'C-TLgxNM_Xo',
    duration: '4:37',
    views: '618',
    publishedAt: 'Feb 10, 2026',
    category: 'AI Video'
  },
  {
    id: 'featured-2',
    title: 'Kling 01 Elements Demo with Stephen Parker | Kling AI Elite Creator',
    description: 'Using Midjourney Prompt Manager, Steve shows how to create prompts for four elements and use the AI Prompt Builder to generate videos.',
    thumbnail: `https://img.youtube.com/vi/NRY5LZjskE0/maxresdefault.jpg`,
    videoId: 'NRY5LZjskE0',
    duration: '4:12',
    views: '55',
    publishedAt: 'Jan 29, 2026',
    category: 'AI Video'
  },
]

const videoCategories = [
  {
    name: 'Living and Vibing in Ecuador',
    description: 'Real experiences from 6+ months in Latin America\'s top expat destination',
    videos: [
      {
        id: '1',
        title: 'First 90 Days in Cuenca, Ecuador – Visas, Accommodations, Food & More in 2025!',
        thumbnail: `https://img.youtube.com/vi/ysVAayjb3xQ/maxresdefault.jpg`,
        videoId: 'ysVAayjb3xQ',
        duration: '18:45',
        views: '7.5K',
        publishedAt: '6 months ago'
      },
      {
        id: '2',
        title: 'My Travel Tech Kit - Equipment I Use for Videos, Vibe Coding and Zoom Calls',
        thumbnail: `https://img.youtube.com/vi/SMNZOwQdzxU/maxresdefault.jpg`,
        videoId: 'SMNZOwQdzxU',
        duration: '15:32',
        views: '520',
        publishedAt: '5 months ago'
      },
      {
        id: '3', 
        title: 'Top 10 Reasons to Move to Ecuador – My Experience in Cuenca!',
        thumbnail: `https://img.youtube.com/vi/5tLRmdCbUN8/maxresdefault.jpg`,
        videoId: '5tLRmdCbUN8',
        duration: '22:18',
        views: '5.7K',
        publishedAt: '8 months ago'
      }
    ]
  }
]

function VideoCard({ video, featured = false }) {
  const cardClasses = featured
    ? "group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
    : "group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"

  return (
    <Link 
      href={`https://youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      <div className={`relative ${featured ? 'aspect-[16/9] mb-6' : 'aspect-video mb-4'}`}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100">
          <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
            <PlayIcon className="w-6 h-6 ml-1 text-white" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute px-2 py-1 text-xs text-white rounded bottom-2 right-2 bg-black/80">
          {video.duration}
        </div>
        {/* External link indicator */}
        <div className="absolute transition-opacity duration-300 opacity-0 top-2 right-2 group-hover:opacity-100">
          <ExternalLinkIcon className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className={`${featured ? 'px-6 pb-6' : 'px-4 pb-4'}`}>
        <h3 className={`font-semibold text-slate-900 dark:text-slate-100 ${featured ? 'text-xl mb-2' : 'text-lg mb-1'} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`}>
          {video.title}
        </h3>
        {featured && (
          <p className="mb-3 text-slate-600 dark:text-slate-400">
            {video.description}
          </p>
        )}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>{video.views} views</span>
          <span>•</span>
          <span>{video.publishedAt}</span>
          {video.category && (
            <>
              <span>•</span>
              <span className="text-amber-600 dark:text-amber-400">{video.category}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

function CategorySection({ category }) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
          {category.name}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          {category.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}

export const metadata = {
  title: 'Videos - AI Image & Video Creation',
  description: 'AI image and video creation demos, tutorials, and deep dives from Kling AI Elite Creator Stephen Parker. Plus remote solopreneur journey content from Ecuador.',
}

export default function Videos() {
  return (
    <SimpleLayout
      title="AI Image & Video Creation Demos 🎬"
      intro={
        <>
          <p>I'm a Kling AI Elite Creator and the founder of Key Prompt Ninja — an AI-powered prompt creation and image/video generation platform supporting 20+ models.</p>
          <p className="mt-4">I create demos, tutorials, and deep dives showing how to get professional results from AI image and video tools. From Kling's multi-shot cinematography to Midjourney's style systems, I break down what actually works.</p>
          <p className="mt-4">Explore my latest work below, and visit <Link href="https://keypromptninja.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-600 dark:text-amber-400 hover:underline">keypromptninja.com</Link> to try the platform yourself.</p>
          <p className="mt-4">If you're a professional creator or production studio, check out my professional AI prompt creator and image/video tool: <Link href="https://midjourneypromptmanager.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-600 dark:text-amber-400 hover:underline">midjourneypromptmanager.com</Link></p>
          <p className="mt-4">You don't need to use Midjourney to take advantage of the AI Prompt Builder, 22 generation models, and intuitive project & asset management. Try Workspaces! Get into the flow state.</p>
        </>
      }
    >
      {/* Featured Videos Section */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Featured Videos
          </h2>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} featured={true} />
          ))}
        </div>
      </div>

      {/* Remote Solopreneur Section */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            My Remote Solopreneur Journey
          </h2>
          <div className="text-slate-600 dark:text-slate-400">
            <p>Want to create location-independent income with no boss, no employees and no limits?</p>
            <p className="mt-4">Interested in a healthier pace of life with living expenses one-third of those in the U.S.?</p>
            <p className="mt-4">I spent 6 months in Ecuador as a solopreneur building my business. I'm showing fellow solopreneurs how to work remotely from Latin America on my Remote Solopreneur YouTube channel — sharing resources for living in the top-rated city in the Andes while building profitable businesses with modern dev tools and AI workflows.</p>
          </div>
        </div>
      </div>

      {/* Video Categories */}
      {videoCategories.map((category) => (
        <CategorySection key={category.name} category={category} />
      ))}

      {/* Channel CTA */}
      <div className="p-8 mt-16 border bg-gradient-to-r from-amber-50 to-sky-50 dark:from-amber-900/20 dark:to-sky-900/20 rounded-2xl border-amber-200 dark:border-amber-800">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Join the Remote Solopreneur Community
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-slate-600 dark:text-slate-400">
            Get weekly insights on building location-independent income, living abroad, and creating the freedom lifestyle you want.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://www.youtube.com/@remote-solopreneur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
            >
              Subscribe on YouTube
              <ExternalLinkIcon className="w-4 h-4" />
            </Link>
            <VideosClient />
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}