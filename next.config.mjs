import { FontaineTransform } from 'fontaine';
import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    // FontaineTransform setup
    config.plugins = config.plugins || [];
    config.plugins.push(
      FontaineTransform.webpack({
        fallbacks: ['Arial'],
        resolvePath: (id) => `./public${id}`,
      }),
    );

    // Add alias for react-dom/server.edge
    if (isServer) {
      config.resolve.alias['react-dom/server.edge'] = 'react-dom/server';
    }

    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
