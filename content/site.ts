// Core event details. Edit this file to update dates, venue and registration.
// Anything set to null shows a "coming soon" line on the site instead.

export const site = {
  name: "Great Indian Hackathon",
  fullName: "Great Indian Hackathon – Kashmir Edition",
  tagline: "Ideas from the valley, built for the valley.",
  description:
    "A free hackathon in Srinagar for students, developers, designers and founders building technology for real problems in Jammu & Kashmir. November 2026.",

  // Used for canonical links, the sitemap and Open Graph tags. No trailing slash.
  // On Netlify, URL is set at build time to the site's main address (the custom domain once
  // one is connected), so link previews always point at a live address.
  url: process.env.URL ?? "https://build-for-kashmir-hackathon.netlify.app",

  organiser: "WOI India",
  programme: "The Great Indian Startup Month",
  programmeShort: "GISM",
  partner: "J&K EDI",

  city: "Srinagar, J&K",
  month: "November 2026",
  // Set these when they are final, e.g. "14 to 16 November 2026" and "SKICC, Srinagar".
  dates: null as string | null,
  venue: null as string | null,
  datesPending: "Dates and venue announced soon",

  cost: "Free to join",
  expectedAttendance: "1,500 to 2,000",

  // Flip registrationOpen to true and set registerUrl to the form link to open registrations.
  registrationOpen: false,
  registerUrl: "#",
  registerLabel: "Register",
  registerClosedLabel: "Registrations opening soon",

  // While registrationOpen is false, a waitlist form collects email addresses through
  // Netlify Forms. Submissions show up in Netlify under Forms, in the "waitlist" form.
  // Set enabled to false to go back to a disabled "Registrations opening soon" button.
  waitlist: {
    enabled: true,
    formName: "waitlist",
    anchor: "waitlist",
    navLabel: "Join the waitlist",
    heading: "Registrations open soon. Join the waitlist.",
    label: "Email address",
    placeholder: "you@example.com",
    button: "Join the waitlist",
    sending: "Sending",
    note: "We'll email you once, when registrations open. No spam.",
    success: "You're on the list. We'll email you when registrations open.",
    error: "That didn't go through. Please try again in a moment.",
    // Only shown when running `npm run dev`. Netlify Forms needs the deployed site.
    devError:
      "Local preview: Netlify Forms only receives submissions on the deployed Netlify site, so this can't be sent from localhost.",
    // Hidden spam trap. People never see it; bots that fill it in are dropped by Netlify.
    honeypotLabel: "Leave this empty",
  },

  links: {
    woi: { label: "woiindia.com", href: "https://www.woiindia.com/" },
    gism: {
      label: "thegreatindianstartupmonth.com",
      href: "https://thegreatindianstartupmonth.com/",
    },
  },

  // WOI India's profiles, shown as icons in the footer. Empty entries are hidden.
  // Labels must match an icon in components/SocialIcon.tsx.
  socials: [
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "YouTube", href: "" },
  ],

  copyright: "© 2026 WOI India",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Tracks", href: "/tracks" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Prizes", href: "/prizes" },
  { label: "Schedule", href: "/schedule" },
  { label: "FAQ", href: "/faq" },
];

// External link at the end of the nav, to the national campaign site.
export const campaignLink = {
  label: "About the campaign",
  href: site.links.gism.href,
  newTab: "(opens in a new tab)",
};

// Section copy that isn't a list of its own. Kept here so components hold no text.
// `href` is the section's own page, `more` the link to it from the home page summary,
// and `description` that page's meta description.
export const copy = {
  hero: {
    label: "WOI India · The Great Indian Startup Month",
    headline: ["Great Indian", "Hackathon."],
    kicker: "Kashmir Edition.",
    secondaryCta: { label: "See the tracks", href: "#tracks" },
  },
  about: {
    label: "About",
    heading: "A hackathon about real problems in J&K.",
    href: "/about",
    more: "About the event and organisers",
    description:
      "What the Great Indian Hackathon – Kashmir Edition is, who it's for, and who's organising it: WOI India, The Great Indian Startup Month and J&K EDI.",
    body: [
      "A free hackathon in Srinagar where teams build working prototypes for everyday problems in J&K, like apple growers who can't see a fair price, artisans who can't prove their Pashmina is real, and villages cut off every winter. Anyone who wants to build something useful is welcome, coder or not.",
    ],
    stats: [
      { value: "₹5L", label: "Prize pool" },
      { value: "7", label: "Tracks" },
      { value: "1,500+", label: "Attendees expected" },
      { value: "6 months", label: "At Startup Park, Bengaluru" },
    ],
  },
  tracks: {
    label: "Tracks",
    heading: "Seven problem areas. All of them local.",
    href: "/tracks",
    more: "See what each track covers",
    description:
      "The seven Great Indian Hackathon – Kashmir Edition tracks: horticulture, tourism, handicrafts, public services, environment, healthcare and youth employment.",
    note: "The detailed problem statements are being written with J&K EDI and government departments.",
  },
  format: {
    label: "Format",
    pageTitle: "How it works",
    heading: "How it works.",
    href: "/how-it-works",
    more: "Full format, workshops and judging",
    description:
      "How the Great Indian Hackathon – Kashmir Edition works: six steps from picking a problem to the final demo, the workshops and mentorship, and how projects are judged.",
    intro:
      "Six steps from picking a problem to standing in front of the jury. You won't be building alone at any point.",
    programmeLabel: "Programme",
    programmeHeading: "What happens at the event",
  },
  prizes: {
    label: "Prizes",
    heading: "What you can win, and what everyone gets.",
    href: "/prizes",
    more: "Prize details and what happens after",
    description:
      "A ₹5,00,000 prize pool, mentorship and workspace for winners, a month of mentorship for every team, and what stays in J&K after the event.",
    winnersLabel: "For winning teams",
    everyoneLabel: "For every team",
  },
  schedule: {
    label: "Schedule",
    heading: "Schedule.",
    href: "/schedule",
    description: "The Great Indian Hackathon – Kashmir Edition schedule, day by day.",
    empty: "The full schedule goes live once dates are confirmed.",
  },
  judging: {
    label: "Judging",
    heading: "How projects are judged.",
    jury: "The jury is made up of technical, product, founder and industry experts.",
  },
  stays: {
    label: "What stays",
    heading: "It doesn't end at the final demo.",
    intro: "Here's what stays in J&K after the hackathon is over.",
  },
  organisers: {
    label: "Organisers",
    heading: "Who's behind it.",
  },
  partners: {
    heading: "Partners",
    gridHeading: "Our ecosystem partners",
    emptyHeading: "Want to partner?",
    emptyBody:
      "We're talking to technology partners now. If your company wants to support teams building for Kashmir, get in touch with WOI India through",
  },
  faq: {
    label: "FAQ",
    heading: "Questions, answered.",
    href: "/faq",
    more: "All questions",
    description:
      "Answers on who can take part, cost, teams, venue, food, travel, ownership and what happens after the Great Indian Hackathon.",
    ask: "Didn't find your answer? Get in touch with WOI India through",
  },
  finalCta: {
    heading: "Got an idea for Kashmir? Come build it.",
    // Trimmed from public/logos/gism-campaign-logo.png, which has wide empty margins.
    image: {
      src: "/logos/gism-campaign.png",
      alt: "The Great Indian Startup Month, November 2026, badge with WOI India, DPIIT #startupindia and media partner YourStory",
      width: 900,
      height: 1087,
    },
  },
  footer: {
    linksHeading: "Links",
    socialsHeading: "Follow",
    pages: [
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Rules", href: "/rules" },
    ],
  },
  ui: {
    skipLink: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    scheduleDays: "Event days",
    scheduleTime: "Time",
    scheduleSession: "Session",
  },
  notFound: {
    label: "404",
    heading: "This page isn't here.",
    body: "The link may be old, or the page may have moved.",
    back: "Back to the home page",
  },
};
