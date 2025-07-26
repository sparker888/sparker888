# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check for code issues

### Project Setup
This is a Next.js 13 application using the new App Router with server components by default.

## Architecture Overview

### Next.js 13 App Router Structure
- Uses the `app/` directory structure (not `pages/`)
- Server components by default for better performance
- Route definitions via `page.jsx` files in directories
- Shared layouts via `layout.jsx` files
- Error boundaries via `error.js` files

### Content Management
**Blog Articles**: Uses MDX (Markdown + JSX) for blog content
- Articles stored in `src/app/articles/[slug]/page.mdx`
- Each article directory contains the MDX file and associated images
- Articles are dynamically imported and sorted by date in `src/lib/articles.js`
- Supports code syntax highlighting via `@mapbox/rehype-prism`

### Styling and Theming
- **Tailwind CSS** for styling with custom configuration
- **Dark mode** support via `next-themes` (class-based)
- **Custom fonts**: Uses "Quiet Sans" font family loaded from `/public/fonts/`
- **Background patterns**: Light/dark themed background images
- **Typography plugin**: Enhanced typography styles in `typography.js`

### Key Components Architecture
- **Layout System**: Root layout (`src/app/layout.jsx`) wraps all pages
- **Main Layout**: `src/components/Layout.jsx` provides header/footer structure
- **Component Library**: Reusable components in `src/components/`
  - Header, Footer, Newsletter, Card, Button, etc.
- **Providers**: Theme and analytics providers in `src/app/providers.jsx`

### Data Layer
- **Static Generation**: Articles are statically generated at build time
- **Article System**: `src/lib/articles.js` handles article loading and sorting
- **RSS Feed**: Generated dynamically at `/feed.xml` route

### Newsletter Integration
- **Netlify Functions**: Server-side newsletter signup via `/netlify/functions/subscribe.js`
- **MailerLite API**: Integration for email collection
- **Client-side form**: Interactive form in `Newsletter.jsx` component

### Image Management  
- **Next.js Image optimization** with AVIF/WebP support
- **Cloudinary integration** for gallery features
- **Local images**: Stored in `src/images/` and `public/images/`

### Analytics and SEO
- **Plausible Analytics**: Privacy-focused analytics via `next-plausible`
- **SEO metadata**: Comprehensive Open Graph and Twitter card setup
- **RSS feed**: Available at `/feed.xml`

## Important Configuration Files
- `next.config.mjs`: Next.js configuration with MDX support and FontaineTransform
- `tailwind.config.js`: Tailwind configuration with custom theme and typography
- `typography.js`: Custom typography styles for articles
- `jsconfig.json`: JavaScript project configuration with path aliases (@/)

## Environment Requirements
- Node.js (for Next.js 13)
- Environment variables needed for newsletter functionality (`MAILERLITE_API_KEY`)
- Netlify deployment configuration in `netlify.toml` (if present)