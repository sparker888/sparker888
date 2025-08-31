![Featured Image](public/images/featured-image-3.webp)

# Welcome to my personal site repo for [sparker888](https://sparker888.com)!

## I built it with Next.js 13's new project structure and server components

Next.js 13 introduces the `app` directory, changing how we create pages and layouts. 

## Key Features
- **Routing**: Define pages in `page.js`, and layouts in `layout.js`.
- **Server Components**: By default, for better performance.
- **Error and Loading States**: Managed by `error.js` and `loading.js`.

## Page and Layout
- `app/page.js`: Defines the UI for the root route `/`.
- `app/layout.js`: Contains shared UI like headers or sidebars.

## Site Blog Articles 
- Articles use `@next/mdx` package that enables the use of Markdown with JSX
- Pages are created dynamically within the `/app` directory of the project
- Works with Server Components, which is the default in the App Router

## Error Handling
- `app/some-directory/error.js`: Manages errors within its directory.

## Data Fetching
- Perform directly inside page components using the Fetch API.

## Newsletter Signup Feature
- **Client-Side Component**: Used `use client` directive in `Newsletter.jsx` to handle form interactivity.
- **Form Handling**: Utilized controlled form inputs with React state for email collection.
- **API Integration**: Connected with Netlify functions for email subscription.
- **User Feedback**: Implemented dynamic messaging to confirm subscription status.

## Image Gallery
- The image galleries are built with Next.js & Cloudinary
- You an view the repo at [surfing-image-gallery](https://github.com/sparker888/surfing-image-gallery)

## Launch Your Own Project!
To set up a new Next.js 13 project:

1. `npx create-next-app@latest my-app`
2. Modify `next.config.js` to enable the `app` directory.
3. Delete `pages/index.js` to avoid conflicts.

For more detailed instructions and examples, refer to the official [Next.js documentation](https://nextjs.org/docs/routing/pages-and-layouts) and this comprehensive [DEV Community guide](https://dev.to/thesanjeevsharma/next-js-13-working-with-the-new-app-directory-4m38).
