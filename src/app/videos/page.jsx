import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import Image from 'next/image'

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

// Note: You'll need to add actual video thumbnails to your /public/images/ directory
// For now, these are placeholder paths that you should replace with actual images

const featuredVideo = {
  id: 'featured',
  title: 'Living in Ecuador as a Remote Solopreneur: 6-Month Journey',
  description: 'Join me as I share the complete experience of spending 6 months in Cuenca, Ecuador while growing my business. From cost of living to digital nomad life, this is everything you need to know.',
  thumbnail: '/images/ecuador-featured-video.jpg', // Add this image
  videoId: 'YOUR_YOUTUBE_VIDEO_ID', // Replace with actual YouTube video ID
  duration: '15:32',
  views: '2.1K',
  publishedAt: '2 weeks ago',
  category: 'Ecuador Living'
}

const videoCategories = [
  {
    name: 'Ecuador Living',
    description: 'Life in Latin America\'s top-rated expat destination',
    videos: [
      {
        id: '1',
        title: 'Cost of Living in Cuenca Ecuador: Real Numbers',
        thumbnail: '/images/ecuador-cost-living.jpg', // Add this image
        videoId: 'YOUTUBE_ID_1', // Replace with actual YouTube video ID
        duration: '12:45',
        views: '1.8K',
        publishedAt: '1 week ago'
      },
      {
        id: '2', 
        title: 'Digital Nomad Setup: My Ecuador Workspace Tour',
        thumbnail: '/images/ecuador-workspace.jpg', // Add this image
        videoId: 'YOUTUBE_ID_2', // Replace with actual YouTube video ID
        duration: '8:23',
        views: '987',
        publishedAt: '3 weeks ago'
      },
      {
        id: '3',
        title: 'Visa Process: How I Got My Ecuador Tourist Visa',
        thumbnail: '/images/ecuador-visa.jpg', // Add this image
        videoId: 'YOUTUBE_ID_3', // Replace with actual YouTube video ID
        duration: '10:15',
        views: '1.2K',
        publishedAt: '1 month ago'
      }
    ]
  },
  {
    name: 'Remote Work Tips',
    description: 'Productivity and systems for location independence',
    videos: [
      {
        id: '4',
        title: 'Claude Code: AI Development That Changed My Business',
        thumbnail: '/images/claude-code-video.jpg', // Add this image
        videoId: 'YOUTUBE_ID_4', // Replace with actual YouTube video ID
        duration: '18:42',
        views: '3.4K',
        publishedAt: '2 weeks ago'
      },
      {
        id: '5',
        title: 'Remote Client Management: Tools & Systems',
        thumbnail: '/images/remote-client-management.jpg', // Add this image
        videoId: 'YOUTUBE_ID_5', // Replace with actual YouTube video ID
        duration: '14:18',
        views: '1.9K',
        publishedAt: '3 weeks ago'
      }
    ]
  },
  {
    name: 'Business Building',
    description: 'From idea to income as a solopreneur',
    videos: [
      {
        id: '6',
        title: 'Building Midjourney Prompt Manager: 30-Day Timeline',
        thumbnail: '/images/mpm-build-video.jpg', // Add this image
        videoId: 'YOUTUBE_ID_6', // Replace with actual YouTube video ID
        duration: '22:15',
        views: '2.8K',
        publishedAt: '1 month ago'
      },
      {
        id: '7',
        title: 'Solopreneur Income Streams: What Actually Works',
        thumbnail: '/images/income-streams.jpg', // Add this image
        videoId: 'YOUTUBE_ID_7', // Replace with actual YouTube video ID
        duration: '16:33',
        views: '4.1K',
        publishedAt: '2 months ago'
      }
    ]
  },
  {
    name: 'Travel & Lifestyle',
    description: 'Adventures and insights from living abroad',
    videos: [
      {
        id: '8',
        title: 'Best Neighborhoods in Cuenca for Digital Nomads',
        thumbnail: '/images/cuenca-neighborhoods.jpg', // Add this image
        videoId: 'YOUTUBE_ID_8', // Replace with actual YouTube video ID
        duration: '11:28',
        views: '1.5K',
        publishedAt: '2 weeks ago'
      },
      {
        id: '9',
        title: 'Ecuador Food Tour: What I Eat in a Week',
        thumbnail: '/images/ecuador-food-tour.jpg', // Add this image
        videoId: 'YOUTUBE_ID_9', // Replace with actual YouTube video ID
        duration: '13:45',
        views: '892',
        publishedAt: '1 month ago'
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
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
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
  title: 'Videos - Remote Solopreneur Journey',
  description: 'Follow my remote solopreneur journey in Ecuador with tips on location independence, business building, and living abroad as a digital nomad.',
}

export default function Videos() {
  return (
    <SimpleLayout
      title="Remote Solopreneur Journey 🎬"
      intro="Follow my 6-month journey living and working in Ecuador while building digital products. From cost of living breakdowns to business growth strategies, I'm sharing everything about the remote solopreneur lifestyle."
    >
      {/* Featured Video Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Featured: Ecuador Experience
          </h2>
          <Link
            href="https://www.youtube.com/@remote-solopreneur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-colors text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Subscribe on YouTube
            <ExternalLinkIcon className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="max-w-4xl">
          <VideoCard video={featuredVideo} featured={true} />
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
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
            >
              Subscribe on YouTube
              <ExternalLinkIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-amber-600 hover:bg-amber-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}