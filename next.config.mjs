import { FontaineTransform } from 'fontaine'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    // FontaineTransform setup
    config.plugins = config.plugins || []
    config.plugins.push(
      FontaineTransform.webpack({
        fallbacks: ['Arial'],
        resolvePath: (id) => `./public${id}`,
      }),
    )

    // Add alias for react-dom/server.edge
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom/server.edge': 'react-dom/server',
      'react-dom$': 'react-dom/profiling',
    }

    return config
  },
  // Update image configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
