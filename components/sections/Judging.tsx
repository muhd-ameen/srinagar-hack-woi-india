import { copy } from "@/content/site";
import { criteria } from "@/content/judging";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const fills = ["fill-sky", "fill-coral", "fill-green", "fill-sun", "fill-cream"];

export function Judging() {
  return (
    <Section id="judging" tone="cream">
      <SectionHeading id="judging" label={copy.judging.label} heading={copy.judging.heading} />

      <div className="mt-12 md:mt-16">
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {criteria.map((criterion, i) => (
            <li key={criterion} className={`card flex flex-col gap-6 p-5 ${fills[i % fills.length]}`} data-reveal>
              <span className="display text-3xl">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg leading-snug font-bold">{criterion}</span>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-[65ch] text-lg text-muted">
          {copy.judging.jury}
        </p>
      </div>
    </Section>
  );
}
