// Frequently asked questions. Answers marked TODO need confirming before launch.
// Answers can have more than one paragraph: use an array of strings.

export type Faq = {
  question: string;
  answer: string[];
};

export const faqs: Faq[] = [
  {
    question: "Who can participate?",
    answer: [
      "Students, developers, designers, researchers, aspiring founders and startup teams. If you want to build something with technology for a problem in J&K, you can take part.",
    ],
  },
  {
    question: "Do I need to know how to code?",
    answer: [
      "No. You don't need to be a hardcore coder. Good teams need people who understand the problem, design the product, talk to users and pitch it. If you can't code, join a team that has someone who can, or use no-code and AI tools. The workshops will help too.",
    ],
  },
  {
    question: "How much does it cost?",
    answer: ["Nothing. The hackathon, workshops, mentorship and summit are free for participants."],
  },
  {
    // TODO confirm team size limits
    question: "How big can a team be?",
    answer: [
      "Team size limits will be published when registrations open. A small team of a few people with a mix of skills works best.",
    ],
  },
  {
    question: "Can I participate alone?",
    answer: [
      "You can register on your own. We'll help solo participants find a team before the build starts, since most projects go better with a few people.",
    ],
  },
  {
    // TODO venue
    question: "Where exactly is it happening?",
    answer: [
      "In Srinagar, in November 2026. We'll announce the venue and dates on this site and email everyone on the waitlist.",
    ],
  },
  {
    // TODO confirm food arrangements
    question: "Will food be provided?",
    answer: [
      "Meal arrangements for the build will be shared with registered participants before the event.",
    ],
  },
  {
    // TODO confirm travel and stay support
    question: "Do you cover travel or stay?",
    answer: [
      "Details on travel and stay support will be shared before the event. If you're coming from outside Srinagar, get in touch with WOI India through woiindia.com.",
    ],
  },
  {
    question: "What should I bring?",
    answer: [
      "A laptop and charger, a photo ID, any hardware your project needs, and warm clothes. It's Srinagar in November, so evenings get cold.",
    ],
  },
  {
    // TODO confirm IP terms with J&K EDI
    question: "Who owns what we build?",
    answer: [
      "Your team does. If your solution is later piloted with a government department, any terms for that will be agreed with your team first.",
    ],
  },
  {
    question: "How are winners selected?",
    answer: [
      "A jury of technical, product, founder and industry experts scores shortlisted teams on seven criteria: relevance to the problem, originality and quality, technical implementation, usability, feasibility and impact, demo quality, and potential for continued development.",
    ],
  },
  {
    question: "What happens after the hackathon?",
    answer: [
      "Every participating team gets one month of Startup School mentorship. Winning teams get three months of mentorship and six months of workspace at Startup Park, Bengaluru, and can be incubated through J&K EDI. Some solutions will be piloted with J&K departments.",
    ],
  },
  {
    question: "I want to mentor, judge or sponsor. Who do I contact?",
    answer: [
      "Get in touch with WOI India through woiindia.com. We'd love to hear from you.",
    ],
  },
];
