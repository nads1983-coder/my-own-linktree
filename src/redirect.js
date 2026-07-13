import { redirectLinks, utmDefaults } from "./config/redirect-links.js";

const slug = new URLSearchParams(window.location.search).get("slug") || window.location.pathname.split("/").filter(Boolean).pop();
const link = redirectLinks[slug];
const status = document.querySelector("#status");
const fallback = document.querySelector("#fallback");

const appendUtm = (destination, content) => {
  const url = new URL(destination);
  url.searchParams.set("utm_source", utmDefaults.source);
  url.searchParams.set("utm_medium", utmDefaults.medium);
  url.searchParams.set("utm_campaign", utmDefaults.campaign);
  url.searchParams.set("utm_content", content || slug);
  return url.toString();
};

if (!link) {
  status.textContent = "That short link was not found.";
} else {
  const destination = appendUtm(link.destination, link.content);
  fallback.href = destination;
  fallback.textContent = "Continue to destination";

  const track = () => {
    if (typeof window.plausible === "function") {
      window.plausible(link.eventName || "shortlink_click", {
        props: {
          slug,
          destination: link.destination
        }
      });
    }
  };

  track();
  window.setTimeout(() => {
    window.location.replace(destination);
  }, 180);
}
