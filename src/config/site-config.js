// Update names, URLs, descriptions, featured status and social links here.
// Reorder the websites array to change the order on the page.
export const siteConfig = {
  ownerName: "Nadine Pierre",
  intro: "Explore my websites, projects and resources.",
  profileImage: "/public/nadine-pierre.png",
  copyrightName: "Nadine Pierre",
  websites: [
    {
      title: "LeadWithNadine.com",
      description: "Leadership insights, book and resources.",
      url: "https://leadwithnadine.com",
      shortPath: "/go/lead",
      featured: true
    },
    {
      title: "Lead With Nadine Foundations",
      description: "A practical leadership course for frontline supervisors and new managers.",
      cta: "Explore the Course — £97",
      label: "New Course",
      url: "https://leadwithnadine.com/foundations",
      shortPath: "/go/foundations",
      featured: true,
      analyticsEvent: "foundations_course_click",
      ariaLabel: "Lead With Nadine Foundations course, Explore the Course for £97"
    },
    {
      title: "Book Series",
      description: "Explore Nadine Pierre's leadership book series.",
      url: "https://amzn.eu/d/07A6gIM1",
      shortPath: "/go/books",
      featured: false
    },
    {
      title: "nadinepierre.com",
      description: "Personal website and main home base.",
      url: "https://nadinepierre.com",
      shortPath: "/go/home",
      featured: false
    },
    {
      title: "100securityprompts.com",
      description: "AI prompts for security professionals.",
      url: "https://100securityprompts.com",
      shortPath: "/go/security",
      featured: false
    },
    {
      title: "getcontentos.co",
      description: "Content creation system and templates.",
      url: "https://getcontentos.co",
      shortPath: "/go/contentos",
      featured: false
    },
    {
      title: "calmauthority.co",
      description: "Calm authority, confidence and communication resources for leaders.",
      url: "https://calmauthority.co",
      shortPath: "/go/calm",
      featured: false
    }
  ],
  contact: {
    heading: "Connect",
    links: [
      {
        label: "LinkedIn",
        url: "/go/linkedin"
      },
      {
        label: "YouTube",
        url: "/go/youtube"
      },
      {
        label: "Instagram",
        url: "/go/instagram"
      },
      {
        label: "Facebook",
        url: "/go/facebook"
      },
      {
        label: "Email",
        url: "mailto:hello@nadinepierre.com"
      }
    ]
  }
};
