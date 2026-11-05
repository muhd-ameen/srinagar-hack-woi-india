import type { CSSProperties } from "react";
import Image from "next/image";
import { copy, site } from "@/content/site";
import { images } from "@/content/images";
import { Arrow } from "../Arrow";
import { Container } from "../Container";
import { RegisterButton } from "../RegisterButton";
import { WaitlistForm } from "../WaitlistForm";

const showWaitlist = !site.registrationOpen && site.waitlist.enabled;

const facts = [
  { term: "Where", value: site.city },
  { term: "When", value: site.month },
  { term: "Cost", value: site.cost },
];

// Desktop: the illustration fills the hero behind the text and fades into the page at the
// bottom. The headline sits on the sky; the smaller text sits on a flat white panel so it
// stays readable over the water. It overlaps the headline row on the right. Mobile: the illustration is a full-width band under the text.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex flex-col lg:min-h-[max(46rem,calc(100svh-4rem))]"
    >
      <Container className="relative flex flex-1 flex-col pt-12 md:pt-20 lg:pb-24">
        <p className="label">{copy.hero.label}</p>
        <h1
          id="hero-heading"
          className="mt-8 text-[clamp(3.5rem,12.5vw,8.75rem)] leading-[0.98] font-medium tracking-tightest md:mt-10"
        >
          {copy.hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[20ch] lg:max-w-none text-2xl leading-tight font-medium tracking-tight text-fg md:mt-6 md:text-3xl lg:-mb-32 xl:-mb-48">
          {copy.hero.kicker}
        </p>

        <div className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-auto lg:gap-x-8">
          <div className="col-span-12 rounded-[3px] lg:col-span-5 lg:col-start-8 lg:bg-bg lg:p-8 xl:col-span-4 xl:col-start-9">
            <p className="max-w-[24ch] text-2xl leading-snug font-light text-fg md:text-3xl lg:text-2xl">
              {site.tagline}
            </p>

            <dl className="mt-8 grid grid-cols-3 border-y border-line">
              {facts.map((fact, i) => (
                <div
                  key={fact.term}
                  className={`py-4 ${i > 0 ? "border-l border-line pl-3 sm:pl-5 lg:pl-3" : "pr-3"}`}
                >
                  <dt className="label-muted text-[0.6875rem]">{fact.term}</dt>
                  <dd className="mt-1 text-sm font-normal sm:text-base lg:text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">
              {site.dates && site.venue ? `${site.dates}, ${site.venue}` : site.datesPending}
            </p>

            {showWaitlist && <WaitlistForm id={site.waitlist.anchor} className="mt-8" />}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              {!showWaitlist && <RegisterButton />}
              <a
                href={copy.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 text-base font-normal"
              >
                <span className="link-underline">{copy.hero.secondaryCta.label}</span>
                <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="fade-y relative mt-12 aspect-(--ratio) lg:fade-b lg:absolute lg:inset-0 lg:-z-10 lg:mt-0 lg:aspect-auto"
        style={{ "--ratio": images.hero.ratio } as CSSProperties}
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[30%_30%]"
        />
      </div>
    </section>
  );
}
