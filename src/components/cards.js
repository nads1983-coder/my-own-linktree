const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" class="card-arrow">
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
`;

export function websiteCard(site, variant = "standard") {
  const url = new URL(site.url);
  const href = site.shortPath ?? site.url;
  const cardLabel = site.ariaLabel ?? `${site.title}. ${site.description}`;
  const eventAttribute = site.analyticsEvent ? ` data-analytics-event="${site.analyticsEvent}"` : "";
  const label = site.label ? `<span class="website-card__label">${site.label}</span>` : "";
  const cta = site.cta ? `<span class="website-card__cta">${site.cta}</span>` : "";

  return `
    <a class="website-card website-card--${variant}" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${cardLabel}"${eventAttribute}>
      <span class="website-card__content">
        ${label}
        <span class="website-card__title">${site.title}</span>
        <span class="website-card__description">${site.description}</span>
        ${cta}
        <span class="website-card__url">${url.hostname.replace(/^www\\./, "")}</span>
      </span>
      ${arrowIcon}
    </a>
  `;
}
