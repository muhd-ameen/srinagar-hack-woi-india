// Copy for the Code of Conduct and Rules pages.
// Each section has a heading plus paragraphs and/or a bullet list.

export type PageSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export type ProsePage = {
  label: string;
  title: string;
  intro: string;
  updated: string;
  sections: PageSection[];
};

export const codeOfConduct: ProsePage = {
  label: "Code of Conduct",
  title: "Code of Conduct.",
  intro:
    "Build for Kashmir should be a good experience for everyone who comes, whatever their background, skill level or reason for being there. This code applies to participants, mentors, judges, volunteers, partners and organisers, at the venue, online and at any related event.",
  updated: "Last updated October 2026",
  sections: [
    {
      heading: "The short version",
      body: [
        "Be kind. Be respectful. Help each other. Harassment of any kind is not tolerated, and anyone who breaks this code can be asked to leave without warning.",
      ],
    },
    {
      heading: "What we expect",
      list: [
        "Treat everyone with respect, including people you disagree with.",
        "Welcome beginners. Everyone was new once, and asking questions is how people learn.",
        "Respect the place and its people. Many of the problems here affect people's lives directly. Talk about them with care.",
        "Ask before you photograph or film someone, and respect a no.",
        "Look after the venue and its equipment.",
        "Follow the instructions of organisers and venue staff, especially on safety.",
      ],
    },
    {
      heading: "What isn't allowed",
      list: [
        "Harassment, intimidation or discrimination based on gender, gender identity, age, religion, caste, region, language, disability, appearance, body size, ethnicity or any other part of who someone is.",
        "Offensive comments, jokes or images, in person, in chat groups or in your project.",
        "Unwanted physical contact or sexual attention.",
        "Following, stalking or recording someone against their wishes.",
        "Disrupting talks, workshops or other teams.",
        "Bringing or using alcohol or drugs at the venue.",
      ],
    },
    {
      heading: "If something happens",
      body: [
        "If you experience or see something that breaks this code, tell any organiser or volunteer straight away. You can ask to stay anonymous. We'll take every report seriously, keep it as confidential as we can, and make sure you feel safe.",
        "We may respond by warning the person, removing them from the event, disqualifying their team, or contacting local authorities if needed.",
      ],
    },
    {
      heading: "Where this comes from",
      body: [
        "This code is adapted from the MLH Code of Conduct and rewritten for our event.",
      ],
    },
  ],
};

export const rules: ProsePage = {
  label: "Rules",
  title: "Rules.",
  intro:
    "These are the rules for Build for Kashmir. If anything is added or changed, we'll update this page and tell registered participants first.",
  updated: "Last updated October 2026",
  sections: [
    {
      heading: "Eligibility",
      list: [
        "The hackathon is open to students, developers, designers, researchers, aspiring founders and early-stage startup teams.",
        "You don't need to be a hardcore coder to take part.",
        // TODO confirm age limit and whether participants must be from J&K
        "Age and residency requirements will be published when registrations open.",
        "Organisers, judges and mentors can't compete.",
      ],
    },
    {
      heading: "Teams",
      list: [
        // TODO confirm team size
        "Team size limits will be published when registrations open.",
        "You can register alone and we'll help you find a team.",
        "Each person can be on one team only.",
        "Team changes after the build starts need an organiser's approval.",
      ],
    },
    {
      heading: "Original work",
      list: [
        "All project work must be done during the hackathon.",
        "You can plan, research and sketch ideas before the event, but code, designs and other project assets must be made during the build.",
        "Open-source libraries, public APIs and frameworks are fine. Credit them in your submission.",
        "Projects that copy someone else's work without credit will be disqualified.",
      ],
    },
    {
      heading: "Using AI tools",
      list: [
        "AI tools are allowed, including coding assistants and generative AI.",
        "Tell us what you used and how. Include a short note in your submission.",
        "You're responsible for everything in your project, including what an AI tool wrote for you. Judges may ask you to explain any part of it.",
      ],
    },
    {
      heading: "Submissions",
      list: [
        "Each team picks one problem statement from the published tracks.",
        "Submit a working prototype, a short description, and a link to your code before the deadline.",
        // TODO confirm submission platform and deadline
        "The submission platform and deadline will be shared at the event.",
        "Late submissions won't be judged.",
      ],
    },
    {
      heading: "Judging",
      body: [
        "Shortlisted teams demo to a jury of technical, product, founder and industry experts. Projects are judged on relevance to the problem statement, originality and quality, technical implementation, usability and user experience, practical feasibility and potential impact, demo quality and clarity, and potential for continued development.",
        "The jury's decision is final.",
      ],
    },
    {
      heading: "Prizes",
      list: [
        "A ₹2 lakh prize pool, plus AI tool credits from technology partners.",
        "Three months of Startup School mentorship and six months of workspace at Startup Park, Bengaluru, for winning teams.",
        "One month of Startup School mentorship for every participating team.",
        // TODO confirm prize split and payout process
        "How the prize pool is split between winning teams, and how it's paid out, will be shared with registered participants before the event.",
      ],
    },
    {
      heading: "Ownership",
      body: [
        // TODO confirm IP terms with J&K EDI
        "Your team owns what it builds. If a project is taken forward as a pilot with a J&K department, any terms will be agreed with the team first.",
      ],
    },
    {
      heading: "Conduct",
      body: [
        "Everyone at the event follows the Code of Conduct. Breaking it can mean disqualification.",
      ],
    },
  ],
};
