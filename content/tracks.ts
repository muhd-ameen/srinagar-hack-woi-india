// The seven problem areas. Order here is the order on the page (numbered 01 to 07).

export type Track = {
  name: string;
  focus: string;
};

export const tracks: Track[] = [
  {
    name: "Horticulture & Agriculture",
    focus: "Market access, storage and price discovery for apple, saffron and walnut growers.",
  },
  {
    name: "Tourism",
    focus: "Off-season demand and digital discovery beyond the few peak months.",
  },
  {
    name: "Handicrafts & Artisans",
    focus:
      "Proof of authenticity and online market access for Pashmina, papier-mâché and other crafts.",
  },
  {
    name: "Public Services",
    focus: "Access for remote and winter-affected areas.",
  },
  {
    name: "Environment",
    focus: "Flood early warning and Dal Lake conservation.",
  },
  {
    name: "Healthcare",
    focus: "Telehealth for remote communities.",
  },
  {
    name: "Youth Employment",
    focus: "Skills and local tech jobs so young people don't have to leave J&K.",
  },
];
