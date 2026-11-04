import { copy } from "@/content/site";
import { outcomes } from "@/content/outcomes";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function WhatStays() {
  return (
    <Section id="what-stays" tone="deep">
      <SectionHeading id="what-stays" label={copy.stays.label} heading={copy.stays.heading}>
        <p>{copy.stays.intro}</p>
      </SectionHeading>

      <ul className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
        {outcomes.map((outcome, i) => (
          <li key={outcome} className="card flex items-baseline gap-5 px-5 py-5" data-reveal>
            <span className="display w-8 shrink-0 text-xl">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-lg leading-snug font-bold md:text-xl">{outcome}</span>
          </li>
        ))}
      </ul>

      <Photo
        photo={images.stays}
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="mt-12 md:mt-16"
      />
    </Section>
  );
}
