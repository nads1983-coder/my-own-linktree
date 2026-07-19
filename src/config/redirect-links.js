// Update short links and UTM defaults here.
// Each slug becomes https://app.nadinepierre.com/go/<slug>.
export const utmDefaults = {
  source: "app_nadinepierre_com",
  medium: "linktree",
  campaign: "personal_links"
};

export const redirectLinks = {
  lead: {
    destination: "https://leadwithnadine.com",
    content: "lead_with_nadine",
    eventName: "shortlink_lead_click"
  },
  foundations: {
    destination: "https://leadwithnadine.com/foundations",
    content: "foundations_course",
    eventName: "foundations_course_click"
  },
  books: {
    destination: "https://amzn.eu/d/07A6gIM1",
    content: "book_series",
    eventName: "shortlink_books_click"
  },
  home: {
    destination: "https://nadinepierre.com",
    content: "nadine_home",
    eventName: "shortlink_home_click"
  },
  security: {
    destination: "https://100securityprompts.com",
    content: "security_prompts",
    eventName: "shortlink_security_click"
  },
  contentos: {
    destination: "https://getcontentos.co",
    content: "content_os",
    eventName: "shortlink_contentos_click"
  },
  businesssorted: {
    destination: "https://businesssorted.uk",
    content: "business_sorted",
    eventName: "shortlink_businesssorted_click"
  },
  linkedin: {
    destination: "https://www.linkedin.com/in/nadine-pierre-miller",
    content: "linkedin",
    eventName: "shortlink_linkedin_click"
  },
  youtube: {
    destination: "https://www.youtube.com/@LeadWithNadine",
    content: "youtube",
    eventName: "shortlink_youtube_click"
  },
  instagram: {
    destination: "https://www.instagram.com/leadwithnadine?igsh=bDMwa21lbTZmb2cx&utm_source=qr",
    content: "instagram",
    eventName: "shortlink_instagram_click"
  },
  facebook: {
    destination: "https://www.facebook.com/share/1cLoMxnwPx/?mibextid=wwXIfr",
    content: "facebook",
    eventName: "shortlink_facebook_click"
  }
};
