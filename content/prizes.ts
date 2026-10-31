// Prizes and support. Set `highlight: true` on the one that should stand out.

import { images, type Photo } from "./images";
import type { Logo } from "./team";

export type Prize = {
  value: string;
  unit?: string;
  title: string;
  detail: string;
  highlight?: boolean;
  // Background photo for the card, from content/images.ts.
  image?: Photo;
  // Logo of the organisation giving the prize.
  logo?: Logo;
};

const startupSchool: Logo = {
  src: "/logos/startup-school.png",
  srcOnDark: "/logos/startup-school-onDark.png",
  alt: "Startup School by WOI.eco",
  width: 480,
  height: 304,
};

export const prizes: Prize[] = [
  {
    value: "₹5,00,000",
    title: "Prize pool",
    detail: "Shared between the winning teams, plus AI tool credits from technology partners.",
  },
  {
    value: "3",
    unit: "months",
    title: "Startup School mentorship",
    logo: startupSchool,
    image: images.startupSchool,
    detail: "For winning teams, to keep working on what they built.",
  },
  {
    value: "6",
    unit: "months",
    title: "Workspace at Startup Park, Bengaluru",
    detail: "A desk for winning teams who want to take their product further.",
    image: images.startupPark,
  },
  {
    value: "1",
    unit: "month",
    title: "Startup School mentorship for every team",
    logo: startupSchool,
    detail:
      "Not just the winners. Every team that takes part gets a month of mentorship after the event.",
    highlight: true,
  },
];
