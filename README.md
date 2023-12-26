# Welcome to my personal site repo

## I'm building it with Next.js 13's new project structure and server components

Next.js 13 introduces the `app` directory, changing how we create pages and layouts. 

## Key Features
- **Routing**: Define pages in `page.js`, and layouts in `layout.js`.
- **Server Components**: By default, for better performance.
- **Error and Loading States**: Managed by `error.js` and `loading.js`.

## Example Usage
To set up a new Next.js 13 project:

1. `npx create-next-app@latest my-app`
2. Modify `next.config.js` to enable the `app` directory.
3. Delete `pages/index.js` to avoid conflicts.

## Page and Layout
- `app/page.js`: Defines the UI for the root route `/`.
- `app/layout.js`: Contains shared UI like headers or sidebars.

## Error Handling
- `app/some-directory/error.js`: Manages errors within its directory.

## Data Fetching
- Perform directly inside page components using the Fetch API.

## Newsletter Signup Feature
- **Client-Side Component**: Used `use client` directive in `Newsletter.jsx` to handle form interactivity.
- **Form Handling**: Utilized controlled form inputs with React state for email collection.
- **API Integration**: Connected with Netlify functions for email subscription.
- **User Feedback**: Implemented dynamic messaging to confirm subscription status.

For more detailed instructions and examples, refer to the official [Next.js documentation](https://nextjs.org/docs/routing/pages-and-layouts) and this comprehensive [DEV Community guide](https://dev.to/thesanjeevsharma/next-js-13-working-with-the-new-app-directory-4m38).
