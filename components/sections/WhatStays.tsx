import { copy } from "@/content/site";
import { outcomes } from "@/content/outcomes";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function WhatStays() {
  return (
    <Section id="what-stays">
      <SectionHeading id="what-stays" label={copy.stays.label} heading={copy.stays.heading}>
        <p>{copy.stays.intro}</p>
      </SectionHeading>

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        <ul className="col-span-12 grid grid-cols-1 gap-x-8 border-t border-line md:grid-cols-2 lg:col-span-9 lg:col-start-4">
          {outcomes.map((outcome, i) => (
            <li key={outcome} className="flex items-baseline gap-5 border-b border-line py-6" data-reveal>
              <span className="label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg leading-snug font-normal md:text-xl">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <Photo
        photo={images.stays}
        fade
        bleed
        sizes="100vw"
        className="mt-12 md:mt-16"
      />
    </Section>
  );
}
