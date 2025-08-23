'use client'

import { ArticleLayout } from '@/components/ArticleLayout'

export default function ArticleWrapper({ article, children }) {
  return <ArticleLayout article={article}>{children}</ArticleLayout>
}