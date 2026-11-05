import { copy } from "@/content/site";
import { criteria } from "@/content/judging";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function Judging() {
  return (
    <Section id="judging">
      <SectionHeading id="judging" label={copy.judging.label} heading={copy.judging.heading} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        <ol className="col-span-12 border-t border-line lg:col-span-9 lg:col-start-4">
          {criteria.map((criterion, i) => (
            <li key={criterion} className="flex items-baseline gap-6 border-b border-line py-5 md:gap-10 md:py-6" data-reveal>
              <span className="label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xl leading-snug font-normal md:text-2xl">{criterion}</span>
            </li>
          ))}
        </ol>
        <p className="col-span-12 mt-8 max-w-[65ch] text-base text-muted md:text-lg lg:col-span-9 lg:col-start-4">
          {copy.judging.jury}
        </p>
      </div>
    </Section>
  );
}
