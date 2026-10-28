// Organisers. `logo` stays null until the logo file is added to /public/logos.
// Logos are shown on a light tile, so files made for a white background work as they are.

export type Logo = {
  src: string;
  // Version with light text, for dark backgrounds.
  srcOnDark?: string;
  alt: string;
  width: number;
  height: number;
};

export type Organiser = {
  role: string;
  name: string;
  about: string;
  href?: string;
  logo: Logo | null;
};

// Shown in this order.
export const organisers: Organiser[] = [
  {
    role: "Supported by",
    name: "Government of Jammu and Kashmir",
    about:
      "Government departments in J&K are working with J&K EDI on the problem statements, so teams build for problems the departments want solved.",
    href: "https://jk.gov.in",
    logo: {
      src: "/logos/jk-government.png",
      alt: "Government of Jammu and Kashmir emblem",
      width: 201,
      height: 320,
    },
  },
  {
    role: "Institutional partner",
    name: "Entrepreneurship Development Institute of Jammu & Kashmir",
    about:
      "J&K EDI is shaping the problem statements with government departments and will incubate the winning teams.",
    href: "https://jkedi.org",
    logo: {
      src: "/logos/jk-edi.png",
      alt: "Jammu & Kashmir Entrepreneurship Development Institute logo",
      width: 560,
      height: 431,
    },
  },
  {
    role: "Part of",
    name: "The Great Indian Startup Month",
    about:
      "A national startup campaign that runs through November 2026. The Great Indian Hackathon – Kashmir Edition is its Srinagar chapter.",
    href: "https://thegreatindianstartupmonth.com",
    logo: {
      src: "/logos/gism-badge.png",
      alt: "The Great Indian Startup Month, November 2026 campaign badge",
      width: 560,
      height: 670,
    },
  },
  {
    role: "Organised by",
    name: "WOI India",
    about:
      "WOI India runs hackathons and startup programmes that put builders in front of real problems. The Great Indian Hackathon – Kashmir Edition is its first edition in the valley.",
    href: "https://woiindia.com",
    logo: {
      src: "/logos/woi-logo-onLight.png",
      alt: "WOI India logo",
      width: 600,
      height: 224,
    },
  },
];
