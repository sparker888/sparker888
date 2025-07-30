import glob from 'fast-glob'

async function importArticle(articleFilename) {
  let { article } = await import(`../app/articles/${articleFilename}`)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Filter out draft articles
  articles = articles.filter(article => !article.draft)

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
