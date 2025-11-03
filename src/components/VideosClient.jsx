'use client'

import { useState } from 'react'
import NewsletterModal from '@/components/NewsletterModal'

export default function VideosClient() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsNewsletterModalOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-sky-600 hover:bg-sky-700"
      >
        Light. Speed.✨ Newsletter
      </button>

      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </>
  )
}