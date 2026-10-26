// "How it works" steps and the list of what happens at the event.

export type Step = {
  title: string;
  detail: string;
};

export const steps: Step[] = [
  { title: "Pick a real problem", detail: "Your team chooses a curated J&K challenge." },
  { title: "Onboarding", detail: "Tools, resources and technical setup." },
  { title: "Build with mentors", detail: "Guidance throughout the build." },
  { title: "Progress reviews", detail: "Checkpoints and technical help." },
  { title: "Submit your MVP", detail: "A working prototype." },
  { title: "Demo to the jury", detail: "Final presentations and awards." },
];

export const programme: Step[] = [
  {
    title: "Main Hackathon",
    detail: "Teams build working prototypes on real J&K problem statements.",
  },
  {
    title: "Technical Workshops",
    detail:
      "AI-assisted development, generative AI, product engineering, data and rapid prototyping.",
  },
  {
    title: "Structured Mentorship",
    detail:
      "Every team gets assigned mentors for scheduled technical, product, business and pitch reviews.",
  },
  {
    title: "Startup & Industry Engagement",
    detail: "Founder conversations, startup demos and networking.",
  },
  {
    title: "Final Demos",
    detail: "Shortlisted teams present to an expert jury.",
  },
  {
    title: "Innovation Summit & Awards",
    detail:
      "The closing summit with institutional leaders, industry voices and the awards.",
  },
];
