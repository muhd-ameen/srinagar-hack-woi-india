import { copy } from "@/content/site";
import { programme, steps } from "@/content/format";
import { images } from "@/content/images";
import { MoreLink } from "../MoreLink";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";

const programmeFills = ["fill-sky", "fill-coral", "fill-green", "fill-sun", "fill-cream", "fill-sky"];

// The summary shows the step titles only; step details and the event programme are on the format page.
export function Format({ number, summary, level = 2 }: SectionVariant) {
  const { format } = copy;
  return (
    <Section id="format" tone="sun" first={level === 1}>
      <SectionHeading id="format" number={number} level={level} label={format.label} heading={format.heading}>
        <p>{format.intro}</p>
      </SectionHeading>

      {/* On the how-it-works page: a wide photo under the heading. */}
      {level === 1 && (
        <Photo
          photo={images.stays}
          sizes="(min-width: 1280px) 1200px, 100vw"
          preload
          aspect="aspect-[16/9] md:aspect-[21/9]"
          className="mt-12 md:mt-16"
        />
      )}

      {/* Steps: numbered cards joined by a dashed path, like levels on a game map. */}
      <ol className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4" data-reveal>
        <span aria-hidden="true" className="absolute top-12 right-8 left-8 hidden border-t-3 border-dashed border-ink xl:block" />
        {steps.map((step, i) => (
          <li key={step.title} className="card relative flex flex-col p-5">
            <span className="display inline-flex size-12 items-center justify-center rounded-xl border-3 border-ink bg-deep text-xl text-cream shadow-hard-sm">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg leading-snug font-bold">{step.title}</h3>
            {!summary && <p className="mt-2 text-sm text-muted">{step.detail}</p>}
          </li>
        ))}
      </ol>

      {summary ? (
        <MoreLink href={format.href} label={format.more} className="mt-12 md:mt-14" />
      ) : (
        // What happens at the event: a grid of coloured cards.
        <div className="mt-20 md:mt-28">
          <div data-reveal>
            <h3 className="tag bg-paper">{format.programmeLabel}</h3>
            <p className="display mt-6 max-w-[22ch] text-3xl leading-tight text-balance md:text-4xl">
              {format.programmeHeading}
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-6">
            {programme.map((item, i) => (
              <li key={item.title} className={`card p-6 md:p-8 ${programmeFills[i % programmeFills.length]}`} data-reveal>
                <span className="text-sm font-bold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <p className="display mt-8 text-2xl leading-snug md:mt-12">{item.title}</p>
                <p className="mt-3 max-w-[36ch] text-base text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
