import { copy } from "@/content/site";
import { tracks } from "@/content/tracks";
import { MoreLink } from "../MoreLink";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";

// The summary lists track names only; the focus of each track is on the tracks page.
export function Tracks({ number, summary, level = 2 }: SectionVariant) {
  return (
    <Section id="tracks" first={level === 1}>
      <SectionHeading id="tracks" number={number} level={level} label={copy.tracks.label} heading={copy.tracks.heading} />

      <ol className="mt-14 border-t border-line md:mt-20">
        {tracks.map((track, i) => (
          <li key={track.name} className="group border-b border-line" data-reveal>
            <div className="grid grid-cols-12 gap-x-6 gap-y-2 py-6 transition-transform duration-200 ease-out group-hover:translate-x-2 md:py-8 lg:gap-x-8">
              <span className="col-span-12 text-2xl leading-tight font-medium tracking-tight text-muted tabular-nums transition-colors duration-200 group-hover:text-secondary md:col-span-1 md:text-3xl lg:col-span-3 lg:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-12 text-2xl leading-tight font-medium tracking-tight md:col-span-5 md:text-3xl lg:col-span-4 lg:text-4xl">
                {track.name}
              </h3>
              {!summary && (
                <p className="col-span-12 max-w-[52ch] text-base text-muted md:col-span-6 md:pt-1 md:text-lg lg:col-span-5">
                  {track.focus}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid grid-cols-12 gap-x-6 lg:gap-x-8">
        {summary ? (
          <MoreLink href={copy.tracks.href} label={copy.tracks.more} className="col-span-12 lg:col-span-9 lg:col-start-4" />
        ) : (
          <p className="col-span-12 flex items-start gap-3 text-sm text-muted lg:col-span-9 lg:col-start-4">
            <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-accent" />
            {copy.tracks.note}
          </p>
        )}
      </div>
    </Section>
  );
}
