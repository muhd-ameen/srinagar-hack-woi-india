import { copy, site } from "@/content/site";
import { Arrow } from "../Arrow";
import { Container } from "../Container";
import { RegisterButton } from "../RegisterButton";
import { WaitlistForm } from "../WaitlistForm";
import { Logo } from "../brand/Logo";
import { Monitor } from "../brand/Monitor";
import { PixelPlus, PixelScatter, Sparkle } from "../brand/Shapes";

const showWaitlist = !site.registrationOpen && site.waitlist.enabled;

const facts = [
  { term: "Where", value: site.city, fill: "fill-sky" },
  { term: "When", value: site.month, fill: "fill-coral" },
  { term: "Cost", value: site.cost, fill: "fill-green" },
];

// Built like the cover of the brand guidelines: the logo on the sky pixel grid, the retro
// monitor beside it, and yellow blobs rising from the bottom corners. The details card sits
// across the bottom edge.
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="tone-sky bg-grid relative isolate overflow-hidden">
      {/* Floating pixels */}
      <PixelPlus className="float absolute top-[14%] left-[3%] -z-10 size-8 md:size-10" />
      <PixelScatter className="float float-delay absolute top-[46%] left-[46%] -z-10 hidden size-10 lg:block" />
      <PixelPlus className="float float-delay absolute top-[10%] right-[4%] -z-10 size-7" color="var(--color-green)" shade="var(--color-deep)" />
      <PixelPlus className="float absolute top-[52%] right-[2%] -z-10 hidden size-8 md:block" color="var(--color-paper)" shade="var(--color-sun)" />

      {/* Blobs, like the corners of the guideline pages */}
      <svg aria-hidden="true" viewBox="0 0 1440 260" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-56 w-full md:h-64">
        <path
          d="M0 96 C90 70 170 92 210 140 C250 188 330 196 420 190 L420 260 L0 260 Z"
          fill="var(--color-sun)"
          stroke="var(--color-ink)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1440 60 C1360 52 1300 90 1270 140 C1240 190 1150 200 1040 196 C980 194 940 220 930 260 L1440 260 Z"
          fill="var(--color-sun)"
          stroke="var(--color-ink)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Container className="relative pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-8 lg:gap-x-8">
          <div className="col-span-12 flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <p className="tag bg-paper">{copy.hero.label}</p>
            <h1 id="hero-heading" className="mt-8 md:mt-10">
              <Logo className="text-[clamp(3.5rem,14vw,8.25rem)]" />
              <span className="sr-only"> – {site.edition}</span>
            </h1>
            <p
              aria-hidden="true"
              className="display mt-6 inline-block -rotate-3 rounded-2xl border-3 border-ink bg-coral px-5 py-2 text-2xl shadow-hard md:text-3xl"
            >
              {site.edition}
            </p>
          </div>

          <div className="relative col-span-10 col-start-2 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-8">
            <Monitor className="h-auto w-full drop-shadow-none" />
            <Sparkle className="float absolute -right-2 bottom-[18%] size-10 md:size-12" />
          </div>
        </div>

        <div className="card mt-12 grid grid-cols-1 gap-8 p-5 sm:p-6 md:mt-16 md:p-8 lg:grid-cols-2 lg:p-10" data-reveal>
          <div className="min-w-0">
            <p className="display max-w-[22ch] text-3xl leading-tight text-balance md:text-4xl">{site.tagline}</p>
            <dl className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
              {facts.map((fact) => (
                <div key={fact.term} className={`min-w-0 rounded-xl border-3 border-ink px-2.5 py-3 sm:px-3 ${fact.fill}`}>
                  <dt className="text-[0.6875rem] font-bold tracking-[0.08em] uppercase">{fact.term}</dt>
                  <dd className="mt-1 text-sm leading-snug font-bold sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">
              {site.dates && site.venue ? `${site.dates}, ${site.venue}` : site.datesPending}
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center lg:border-l-3 lg:border-dashed lg:border-ink/25 lg:pl-8">
            {showWaitlist && <WaitlistForm id={site.waitlist.anchor} />}
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5">
              {!showWaitlist && <RegisterButton />}
              <a href={copy.hero.secondaryCta.href} className="group inline-flex items-center gap-2 text-base font-bold">
                <span className="link-underline">{copy.hero.secondaryCta.label}</span>
                <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
