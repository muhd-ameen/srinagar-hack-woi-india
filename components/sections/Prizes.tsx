import Image from "next/image";
import { copy } from "@/content/site";
import { prizes, type Prize } from "@/content/prizes";
import { MoreLink } from "../MoreLink";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";

function Amount({ prize, className }: { prize: Prize; className: string }) {
  return (
    <p className={`leading-none font-medium tracking-tight ${className}`}>
      {prize.value}
      {prize.unit && <span className="ml-[0.25em] text-[0.45em] tracking-normal">{prize.unit}</span>}
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

  return (
    <Section id="prizes" first={level === 1}>
      <SectionHeading id="prizes" number={number} level={level} label={text.label} heading={text.heading} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        <h3 className="label-muted col-span-12 lg:col-span-3 lg:pt-8">{text.winnersLabel}</h3>
        {/* The first prize (the pool) gets a full row; the rest share one. */}
        <ul className="col-span-12 mt-6 grid grid-cols-1 border-t border-line md:grid-cols-2 lg:col-span-9 lg:mt-0">
          {forWinners.map((prize, i) => (
            <li
              key={prize.title}
              className={`border-b border-line py-8 md:pr-6 ${
                i === 0 ? "md:col-span-2 md:py-10" : i % 2 === 0 ? "md:border-l md:pl-6" : ""
              }`}
              data-reveal
            >
              {prize.image ? (
                // Photo card: the text sits on a dark scrim at the bottom of the photo.
                <div className="relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-[3px] p-6 text-bg md:min-h-96">
                  <Image
                    src={prize.image.src}
                    alt={prize.image.alt}
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
                    className="-z-20 object-cover"
                    style={{ objectPosition: prize.image.focus }}
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/45 to-transparent" />
                  <Amount prize={prize} className="text-[clamp(2.75rem,5vw,4.5rem)]" />
                  <p className="mt-5 text-base font-medium">{prize.title}</p>
                  {!summary && <p className="mt-1 max-w-[48ch] text-sm text-bg/80">{prize.detail}</p>}
                </div>
              ) : (
                <>
                  <PrizeLogo prize={prize} className="mb-5" />
                  <Amount
                    prize={prize}
                    className={i === 0 ? "text-[clamp(3.25rem,9vw,8rem)]" : "text-[clamp(2.75rem,5vw,4.5rem)]"}
                  />
                  <p className="mt-5 text-base font-medium">{prize.title}</p>
                  {!summary && <p className="mt-1 max-w-[48ch] text-sm text-muted">{prize.detail}</p>}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {forEveryone.map((prize) => (
        <div key={prize.title} className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16 lg:gap-x-8" data-reveal>
          <h3 className="label col-span-12 lg:col-span-3 lg:pt-10">{text.everyoneLabel}</h3>
          <div className="col-span-12 mt-6 rounded-[3px] bg-secondary p-6 text-bg sm:p-10 lg:col-span-9 lg:mt-0">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <Amount prize={prize} className="text-[clamp(4.5rem,11vw,9rem)] text-accent" />
              <div>
                <PrizeLogo prize={prize} onDark className="mb-6" />
                <p className="text-2xl leading-tight font-medium md:text-3xl">{prize.title}</p>
                {!summary && <p className="mt-3 max-w-[48ch] text-base text-bg/80">{prize.detail}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}

      {summary && (
        <div className="mt-10 grid grid-cols-12 gap-x-6 lg:gap-x-8">
          <MoreLink href={text.href} label={text.more} className="col-span-12 lg:col-span-9 lg:col-start-4" />
        </div>
      )}
    </Section>
  );
}
