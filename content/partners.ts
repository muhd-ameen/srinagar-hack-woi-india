// Technology and community partners, shown in this order.
// Only add a partner here once they have CONFIRMED in writing.
// While this list is empty, the site shows a "Want to partner?" block instead.
//
// Logos show at up to 80px tall on a white card, so square marks work best.
// `width` and `height` are the logo file's pixel size. Original files are in assets/source/.

export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  // Leave out until the link is confirmed; the card then shows without one.
  href?: string;
};

export const partners: Partner[] = [
  {
    name: "Government of Jammu and Kashmir",
    logo: "/logos/jk-government.png",
    width: 201,
    height: 320,
    href: "https://jk.gov.in/",
  },
  {
    name: "J&K Entrepreneurship Development Institute",
    logo: "/logos/jk-edi-mark.png",
    width: 320,
    height: 265,
    href: "https://jkedi.org/",
  },
  {
    name: "YourStory",
    logo: "/logos/yourstory.png",
    width: 320,
    height: 320,
    href: "https://yourstory.com/",
  },
  {
    name: "The Economic Times",
    logo: "/logos/economic-times.png",
    width: 110,
    height: 102,
    href: "https://economictimes.indiatimes.com/",
  },
  {
    name: "i-Hub Gujarat",
    logo: "/logos/ihub-gujarat.png",
    width: 288,
    height: 116,
    href: "https://ihubgujarat.in/",
  },
  {
    name: "FITT, IIT Delhi",
    logo: "/logos/fitt-iit-delhi.png",
    width: 159,
    height: 160,
    href: "https://fitt-iitd.in/",
  },
  {
    name: "Maruti Suzuki Innovation",
    logo: "/logos/maruti-suzuki-innovation.png",
    width: 225,
    height: 49,
    href: "https://www.marutisuzukiinnovation.com/",
  },
  {
    name: "ASSOCHAM",
    logo: "/logos/assocham.png",
    width: 367,
    height: 160,
    href: "https://www.assocham.org/",
  },
  {
    name: "IIML EIC",
    logo: "/logos/iiml-eic.png",
    width: 813,
    height: 158,
    href: "https://iimleic.com/",
  },
  {
    name: "QuantumX",
    logo: "/logos/quantumx.png",
    width: 605,
    height: 160,
  },
  {
    name: "Kerala Startup Mission",
    logo: "/logos/kerala-startup-mission.png",
    width: 199,
    height: 160,
    href: "https://startupmission.kerala.gov.in/",
  },
  {
    name: "Startup School",
    logo: "/logos/startup-school.png",
    width: 480,
    height: 304,
    href: "https://mystartupschool.com/",
  },
  {
    name: "Startup Park",
    logo: "/logos/startup-park.png",
    width: 480,
    height: 134,
    href: "https://startupparknew.vercel.app/", // TODO swap for Startup Park's final domain
  },
];
