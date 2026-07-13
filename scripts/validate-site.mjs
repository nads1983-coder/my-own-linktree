import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "src/main.js",
  "src/config/site-config.js",
  "src/config/redirect-links.js",
  "src/theme/theme.css",
  "src/styles.css",
  "public/nadine-pierre.png",
  "public/favicon.svg",
  "public/apple-touch-icon.svg",
  "public/og-image.svg",
  "public/site.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "go/index.html",
  "src/redirect.js"
];

await Promise.all(requiredFiles.map((file) => access(file)));

const config = await import("../src/config/site-config.js");
const redirects = await import("../src/config/redirect-links.js");
const html = await readFile("index.html", "utf8");
const shortPathPattern = /^\/go\/[a-z0-9-]+$/;
const hasShortLink = (path) => redirects.redirectLinks[path.replace("/go/", "")];

if (!html.includes("og:title") || !html.includes("twitter:card")) {
  throw new Error("SEO/Open Graph metadata is missing.");
}

if (!html.includes("https://app.nadinepierre.com/public/og-image.svg")) {
  throw new Error("Open Graph image must use the public absolute URL.");
}

if (!html.includes('type="application/ld+json"')) {
  throw new Error("Structured data JSON-LD is missing.");
}

if (!Array.isArray(config.siteConfig.websites) || config.siteConfig.websites.length < 1) {
  throw new Error("At least one website must be configured.");
}

for (const site of config.siteConfig.websites) {
  if (!site.title || !site.description || !site.url) {
    throw new Error(`Website entry is incomplete: ${JSON.stringify(site)}`);
  }

  new URL(site.url);

  if (site.shortPath && (!shortPathPattern.test(site.shortPath) || !hasShortLink(site.shortPath))) {
    throw new Error(`Website short link is not configured: ${site.shortPath}`);
  }
}

for (const link of config.siteConfig.contact.links) {
  if (!link.label || !link.url) {
    throw new Error(`Contact link is incomplete: ${JSON.stringify(link)}`);
  }

  if (link.url.startsWith("mailto:")) {
    continue;
  }

  if (link.url.startsWith("/")) {
    if (!shortPathPattern.test(link.url) || !hasShortLink(link.url)) {
      throw new Error(`Contact short link is not configured: ${link.url}`);
    }
    continue;
  }

  new URL(link.url);
}

for (const [slug, link] of Object.entries(redirects.redirectLinks)) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(`Invalid short-link slug: ${slug}`);
  }
  if (!link.destination || !link.content) {
    throw new Error(`Short link is incomplete: ${slug}`);
  }
  new URL(link.destination);
}

console.log("Site validation passed.");
