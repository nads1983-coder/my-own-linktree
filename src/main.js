import { websiteCard } from "./components/cards.js";
import { siteConfig } from "./config/site-config.js";

const featuredSite = siteConfig.websites.find((site) => site.featured) ?? siteConfig.websites[0];
const standardSites = siteConfig.websites.filter((site) => site !== featuredSite);
const currentYear = new Date().getFullYear();

document.querySelector("#app").innerHTML = `
  <main id="main" class="page-shell">
    <section class="hero" aria-labelledby="page-title">
      <div class="hero__portrait-wrap" aria-hidden="true">
        <img class="hero__portrait" src="${siteConfig.profileImage}" alt="" width="480" height="480" />
      </div>
      <div class="hero__copy">
        <h1 id="page-title">${siteConfig.ownerName}</h1>
        <p>${siteConfig.intro}</p>
      </div>
    </section>

    <section class="featured-section" aria-labelledby="featured-title">
      <div class="section-heading">
        <h2 id="featured-title">Featured</h2>
      </div>
      ${websiteCard(featuredSite, "featured")}
    </section>

    <section class="directory-section" aria-labelledby="directory-title">
      <div class="section-heading">
        <h2 id="directory-title">Websites</h2>
      </div>
      <div class="website-list">
        ${standardSites.map((site) => websiteCard(site)).join("")}
      </div>
    </section>

    <section class="contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">${siteConfig.contact.heading}</h2>
      <div class="contact-links">
        ${siteConfig.contact.links
          .map(
            (link) => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>
            `
          )
          .join("")}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; ${currentYear} ${siteConfig.copyrightName}. All rights reserved.</p>
  </footer>
`;
