// Every photo on the site. To swap a photo, replace the file in /public/images
// with one of the same name and aspect ratio, then update `alt` here.
// See public/images/README.md for sizes.

export type Photo = {
  src: string;
  alt: string;
  // Aspect ratio as width / height. Must match the file to avoid cropping surprises.
  ratio: number;
  // CSS object-position for the part to keep in view when the photo is cropped to fit.
  focus?: string;
};

export const images = {
  startupPark: {
    src: "/images/startup-park.jpg",
    alt: "Startup Park in Bengaluru at dusk: a glass-fronted building with a rooftop garden and a colourful geometric mural across the lower floors",
    ratio: 1200 / 1102,
    focus: "50% 60%",
  },
  startupSchool: {
    src: "/images/startup-school.jpg",
    alt: "The Startup School by WOI.eco sign lit up in colourful letters on a dark teal slatted wall, with ring lights overhead and a wooden floor",
    ratio: 3 / 2,
    focus: "62% 45%",
  },
  hero: {
    src: "/images/hero-dal-lake.jpg",
    alt: "Illustration of a boatman paddling a shikara on Dal Lake at sunrise, with houseboats, autumn trees and snow-capped mountains behind",
    ratio: 3 / 2,
  },
  aboutPeople: {
    src: "/images/people-hacking-01.jpg",
    alt: "Illustration of four students building a project at a long wooden table, with laptops, sketches, a circuit board and a copper samovar of kahwa, beside a window looking out on chinar trees, a lake and snowy mountains",
    ratio: 4 / 3,
  },
  aboutPlace: {
    src: "/images/srinagar-winter.jpg",
    alt: "Illustration of a snowy lane in Srinagar's old city: a figure in a pheran carries a basket past brick walls and carved wooden houses, a bakery glows with fresh bread, and a shrine spire and snow-capped mountains rise behind",
    ratio: 4 / 5,
  },
  format: {
    src: "/images/people-mentoring-01.jpg",
    alt: "Illustration of a mentor with a lanyard pointing at a laptop screen while two participants take notes and listen, at a wooden table by a window looking out on chinar trees, a lake and snowy mountains",
    ratio: 3 / 2,
  },
  stays: {
    src: "/images/chinar-autumn.jpg",
    alt: "Illustration of chinar trees in red and orange autumn colour in a Mughal garden in Srinagar, with a fountain channel, Dal Lake and snow-capped mountains behind",
    ratio: 21 / 9,
  },
} satisfies Record<string, Photo>;
