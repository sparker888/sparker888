import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'

function Article({ article }) {
  // Map article slugs to their thumbnail images in the public folder
  const getThumbnailSrc = (slug) => {
    const thumbnailMap = {
      'light-speed-7': '/article-thumbnails/light-speed-7.png',
      'light-speed-6': '/article-thumbnails/light-speed-6.png',
      'light-speed-5': '/article-thumbnails/light-speed-5.png',
      'light-speed-4': '/article-thumbnails/light-speed-4.png',
      'april-7-update': '/article-thumbnails/april-7-update.webp',
      'march-25-update': '/article-thumbnails/march-25-update.webp',
      'jan-25-update': '/article-thumbnails/jan-25-update.png',
      'december-update': '/article-thumbnails/december-update.png',
      'introducing-midjourney-prompt-manager': '/article-thumbnails/introducing-midjourney-prompt-manager.png',
    }
    return thumbnailMap[slug] || null
  }

  const thumbnailSrc = getThumbnailSrc(article.slug)
  const shouldShowThumbnail = Boolean(thumbnailSrc)

  return (
    <article className="md:grid md:grid-cols-4 md:items-start md:gap-6">
      {shouldShowThumbnail && (
        <div className="hidden md:block">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={thumbnailSrc}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
        </div>
      )}
      <Card className={shouldShowThumbnail ? "md:col-span-3" : "md:col-span-4"}>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="text-sky-600 dark:text-sky-400 font-semibold"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on modern web development, photography and AI image creation.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="I write about modern AI web development, photography and Midjourney AI image creation."
      intro="All of my long-form thoughts on Web development, creating compelling AI images, capturing magnificent aerial footage, and the latest updates for my Midjourney Prompt Manager app."
    >
      <div className="md:border-l md:border-slate-100 md:pl-6 md:dark:border-slate-700/40">
        <div className="flex flex-col max-w-3xl space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
