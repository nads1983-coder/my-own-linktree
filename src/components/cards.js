const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" class="card-arrow">
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
`;

export function websiteCard(site, variant = "standard") {
  const url = new URL(site.url);

  return `
    <a class="website-card website-card--${variant}" href="${site.url}" target="_blank" rel="noopener noreferrer">
      <span class="website-card__content">
        <span class="website-card__title">${site.title}</span>
        <span class="website-card__description">${site.description}</span>
        <span class="website-card__url">${url.hostname.replace(/^www\\./, "")}</span>
      </span>
      ${arrowIcon}
    </a>
  `;
}
