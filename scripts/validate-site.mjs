import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "src/main.js",
  "src/config/site-config.js",
  "src/theme/theme.css",
  "src/styles.css",
  "public/nadine-pierre.png",
  "public/favicon.svg",
  "public/apple-touch-icon.svg",
  "public/og-image.svg",
  "public/site.webmanifest",
  "robots.txt",
  "sitemap.xml"
];

await Promise.all(requiredFiles.map((file) => access(file)));

const config = await import("../src/config/site-config.js");
const html = await readFile("index.html", "utf8");

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
}

for (const link of config.siteConfig.contact.links) {
  if (!link.label || !link.url) {
    throw new Error(`Contact link is incomplete: ${JSON.stringify(link)}`);
  }

  if (!link.url.startsWith("mailto:")) {
    new URL(link.url);
  }
}

console.log("Site validation passed.");
