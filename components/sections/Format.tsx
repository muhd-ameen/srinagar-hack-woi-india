import { copy } from "@/content/site";
import { programme, steps } from "@/content/format";
import { images } from "@/content/images";
import { MoreLink } from "../MoreLink";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";

// The summary shows the step titles only; step details and the event programme are on the format page.
export function Format({ number, summary, level = 2 }: SectionVariant) {
  const { format } = copy;
  return (
    <Section id="format" first={level === 1}>
      <SectionHeading id="format" number={number} level={level} label={format.label} heading={format.heading}>
        <p>{format.intro}</p>
      </SectionHeading>

      {/* On the how-it-works page: a full-width band under the heading. */}
      {level === 1 && (
        <Photo
          photo={images.stays}
          sizes="100vw"
          preload
          fade
          bleed
          aspect="aspect-[16/9] md:aspect-[21/9]"
          className="mt-12 md:mt-16"
        />
      )}

      {/* Timeline: vertical on mobile, a horizontal line with points on desktop. */}
      <ol className="mt-14 grid grid-cols-1 md:mt-20 lg:grid-cols-6" data-reveal>
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative border-l border-line pb-10 pl-8 last:pb-0 lg:border-t lg:border-l-0 lg:pt-10 lg:pr-6 lg:pb-0 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] h-[9px] w-[9px] rounded-full bg-accent lg:top-[-5px] lg:left-0"
            />
            <span className="label">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg leading-snug font-medium">{step.title}</h3>
            {!summary && <p className="mt-2 text-sm text-muted">{step.detail}</p>}
          </li>
        ))}
      </ol>

      {summary ? (
        <MoreLink href={format.href} label={format.more} className="mt-14 md:mt-16" />
      ) : (
        // What happens at the event: a numbered grid of cells sharing hairline borders.
        <div className="mt-20 md:mt-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 lg:gap-x-8" data-reveal>
            <h3 className="label col-span-12 pt-2 lg:col-span-3">{format.programmeLabel}</h3>
            <p className="col-span-12 max-w-[22ch] text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl lg:col-span-9">
              {format.programmeHeading}
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
            {programme.map((item, i) => (
              <li
                key={item.title}
                className="border-r border-b border-line p-6 transition-colors duration-150 hover:bg-surface md:p-8"
                data-reveal
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-accent" />
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-10 text-xl leading-snug font-medium md:mt-14">{item.title}</p>
                <p className="mt-2 max-w-[36ch] text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
