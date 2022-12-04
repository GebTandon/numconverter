This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

^^----------------------------------^^
- [Ref article for this proj](https://refine.dev/blog/next-js-with-typescript/ )

# NextJs #
- In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.
- By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
    - Static Generation (Recommended): The HTML is generated at build time and will be reused on each request. `next build`.
        - Your page content depends on external data: Use getStaticProps.
        - Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).
    - Server-side Rendering: The HTML is generated on each request.
    - You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
    - You can also use Client-side data fetching along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript.
    - Next.js allows you to create or update static pages after you’ve built your site. Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages.
- API Routes can't be used with next export
- API Routes do not specify CORS headers, meaning they are same-origin only by default.
- [setup debugging](https://thundermiracle.com/blog/en/2020-12-23-debug-nextjs-typescript-in-vscode/ )
    - [alternate](https://nextjs.org/docs/advanced-features/debugging )