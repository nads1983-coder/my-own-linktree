# Nadine Pierre Directory

A mobile-first, Linktree-style directory for Nadine Pierre's websites, projects and resources. It is intended to be served from `https://app.nadinepierre.com` and is intentionally lightweight, fast-loading and easy to deploy on Vercel.

## Edit Websites, Links and Copy

Update all link content in:

`src/config/site-config.js`

Use this file to:

- Add, remove or reorder websites
- Change website titles, descriptions and URLs
- Choose the featured website with `featured: true`
- Update the hero intro
- Update contact links
- Change the profile image path

## Update Brand Colours and Styling

Update theme tokens in:

`src/theme/theme.css`

Use this file to change:

- Brand colours
- Fonts
- Spacing
- Card radius, borders and shadows
- Button colours and radius

The layout CSS uses these theme tokens, so future brands or seasonal campaigns can be swapped without rewriting the page structure.

## Profile Image, Favicon and Open Graph

Profile image:

`public/nadine-pierre.png`

Favicon:

`public/favicon.svg`

Open Graph preview image:

`public/og-image.svg`

If you prefer a PNG Open Graph image, export one as `public/og-image.png` and update the `og:image` metadata in `index.html` to `/public/og-image.png`.

## Analytics

There is an analytics-ready placeholder comment near the end of `index.html`. Add your analytics provider snippet there when ready.

## Local Development

Run:

```bash
npm run dev
```

This serves the static site locally at `http://localhost:4173`.

## Validate

Run:

```bash
npm run build
```

The build script validates that required files, metadata and website data are present.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default static site settings.
4. Deploy.

No build output directory is required because this is a static site.
