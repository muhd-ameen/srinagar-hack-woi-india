import Image from "next/image";
import { copy } from "@/content/site";
import { prizes, type Prize } from "@/content/prizes";
import { MoreLink } from "../MoreLink";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";
import { PixelPlus, Sparkle } from "../brand/Shapes";

function Amount({ prize, className }: { prize: Prize; className: string }) {
  return (
    <p className={`display leading-none ${className}`}>
      {prize.value}
      {prize.unit && <span className="ml-[0.25em] font-sans text-[0.4em] font-bold tracking-normal [-webkit-text-stroke:0] [text-shadow:none]">{prize.unit}</span>}
    </p>
  );
}

function PrizeLogo({ prize, onDark = false, className = "" }: { prize: Prize; onDark?: boolean; className?: string }) {
  if (!prize.logo) return null;
  return (
    <Image
      src={onDark ? (prize.logo.srcOnDark ?? prize.logo.src) : prize.logo.src}
      alt={prize.logo.alt}
      width={prize.logo.width}
      height={prize.logo.height}
      className={`h-12 w-auto ${className}`}
    />
  );
}

// The summary shows amounts and titles; what each prize includes is on the prizes page.
export function Prizes({ number, summary, level = 2 }: SectionVariant) {
  const { prizes: text } = copy;
  const forWinners = prizes.filter((prize) => !prize.highlight);
  const forEveryone = prizes.filter((prize) => prize.highlight);
  const [pool, ...rest] = forWinners;

  return (
    <Section id="prizes" tone="cream" first={level === 1}>
      <SectionHeading id="prizes" number={number} level={level} label={text.label} heading={text.heading} />

      <h3 className="label-muted mt-12 md:mt-16">{text.winnersLabel}</h3>
      <ul className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {pool && (
          // The pool: a big sun-yellow card across the full row.
          <li className="card fill-sun relative overflow-hidden p-6 sm:p-10 md:col-span-2" data-reveal>
            <Sparkle className="float absolute top-10 right-10 hidden size-14 md:block" fill="var(--color-paper)" />
            <PixelPlus className="float float-delay absolute right-[22%] bottom-8 hidden size-8 md:block" color="var(--color-sky)" shade="var(--color-deep)" />
            <PrizeLogo prize={pool} className="mb-5" />
            <Amount prize={pool} className="display-outline text-[clamp(3rem,10vw,8rem)] text-paper" />
            <p className="mt-6 text-xl font-bold">{pool.title}</p>
            {!summary && <p className="mt-1 max-w-[48ch] text-base text-muted">{pool.detail}</p>}
          </li>
        )}
        {rest.map((prize) => (
          <li key={prize.title} data-reveal>
            {prize.image ? (
              // Photo card: the text sits on a dark scrim at the bottom of the photo.
              <div className="card relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden p-6 text-paper md:min-h-96">
                <Image
                  src={prize.image.src}
                  alt={prize.image.alt}
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                  className="-z-20 object-cover"
                  style={{ objectPosition: prize.image.focus }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/45 to-transparent" />
                <Amount prize={prize} className="text-[clamp(2.75rem,5vw,4.5rem)] text-sun" />
                <p className="mt-4 text-lg font-bold">{prize.title}</p>
                {!summary && <p className="mt-1 max-w-[48ch] text-base text-paper/85">{prize.detail}</p>}
              </div>
            ) : (
              <div className="card h-full p-6">
                <PrizeLogo prize={prize} className="mb-5" />
                <Amount prize={prize} className="text-[clamp(2.75rem,5vw,4.5rem)]" />
                <p className="mt-4 text-lg font-bold">{prize.title}</p>
                {!summary && <p className="mt-1 max-w-[48ch] text-base text-muted">{prize.detail}</p>}
              </div>
            )}
          </li>
        ))}
      </ul>

      {forEveryone.map((prize) => (
        <div key={prize.title} className="mt-12 md:mt-16" data-reveal>
          <h3 className="label-muted">{text.everyoneLabel}</h3>
          <div className="card fill-deep mt-5 p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <Amount prize={prize} className="display-outline text-[clamp(4.5rem,11vw,9rem)] text-sun" />
              <div>
                <PrizeLogo prize={prize} onDark className="mb-6" />
                <p className="display text-2xl leading-tight md:text-3xl">{prize.title}</p>
                {!summary && <p className="mt-3 max-w-[48ch] text-base text-muted">{prize.detail}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}

      {summary && <MoreLink href={text.href} label={text.more} className="mt-10" />}
    </Section>
  );
}
