import { copy } from "@/content/site";
import { tracks } from "@/content/tracks";
import { MoreLink } from "../MoreLink";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";
import { PixelPlus, PixelStairs } from "../brand/Shapes";

// One fill per track, cycling through the palette.
const fills = ["fill-sun", "fill-sky", "fill-coral", "fill-green", "fill-cream", "fill-sun", "fill-sky"];

// Coloured cards on deep blue. The summary shows names only; the tracks page adds the focus.
export function Tracks({ number, summary, level = 2 }: SectionVariant) {
  return (
    <Section id="tracks" tone="deep" first={level === 1}>
      <PixelStairs className="pointer-events-none absolute right-0 bottom-0 hidden h-32 w-40 lg:block" color="var(--color-sky)" />
      <PixelPlus className="float absolute top-20 right-[8%] hidden size-9 md:block" color="var(--color-sun)" shade="var(--color-sky)" />

      <SectionHeading id="tracks" number={number} level={level} label={copy.tracks.label} heading={copy.tracks.heading} />

      <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {tracks.map((track, i) => (
          <li
            key={track.name}
            className={`card flex flex-col p-6 transition-transform duration-150 hover:-translate-y-1 hover:-rotate-1 ${fills[i % fills.length]} ${
              summary ? "min-h-40" : "min-h-56"
            }`}
            data-reveal
          >
            <span className="inline-flex size-10 items-center justify-center rounded-lg border-3 border-ink bg-paper text-sm font-bold tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-auto pt-8 text-2xl leading-tight">{track.name}</h3>
            {!summary && <p className="mt-3 text-base text-muted">{track.focus}</p>}
          </li>
        ))}
      </ol>

      <div className="mt-10 md:mt-12">
        {summary ? (
          <MoreLink href={copy.tracks.href} label={copy.tracks.more} />
        ) : (
          <p className="flex max-w-[60ch] items-start gap-3 text-base text-muted">
            <span aria-hidden="true" className="mt-[0.4rem] size-3 shrink-0 border-2 border-ink bg-sun" />
            {copy.tracks.note}
          </p>
        )}
      </div>
    </Section>
  );
}
