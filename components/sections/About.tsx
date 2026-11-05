import { copy } from "@/content/site";
import { images } from "@/content/images";
import { MoreLink } from "../MoreLink";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { sectionLabel, type SectionVariant } from "../SectionHeading";

export function About({ number, summary, level = 2 }: SectionVariant) {
  const { about } = copy;
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <Section id="about" first={level === 1}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8" data-reveal>
        <p className="label col-span-12">{sectionLabel(number, about.label)}</p>
        <Heading
          id="about-heading"
          className="col-span-12 max-w-[16ch] text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:col-span-6 lg:text-6xl"
        >
          {about.heading}
        </Heading>
        <div className="col-span-12 max-w-[65ch] space-y-5 text-base md:text-lg lg:col-span-5 lg:col-start-8 lg:pt-2">
          {about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          {summary && <MoreLink href={about.href} label={about.more} />}
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-t border-line md:mt-24 lg:grid-cols-4 lg:border-b" data-reveal>
        {about.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`border-b border-line py-6 pr-4 lg:border-b-0 lg:py-8 ${
              i % 2 === 1 ? "border-l pl-4 lg:pl-6" : ""
            } ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-4xl font-medium tracking-tight md:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm text-muted">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      {!summary && (
        // Two photos at the same height on tablet and up; each keeps its own shape on phones.
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-24 lg:gap-x-8" data-reveal>
          <Photo
            photo={images.aboutPeople}
            sizes="(min-width: 1280px) 820px, (min-width: 768px) 66vw, 100vw"
            crisp
            aspect="aspect-[4/3] md:aspect-auto md:h-[28rem] lg:h-[34rem]"
            className="col-span-12 md:col-span-8"
          />
          <Photo
            photo={images.aboutPlace}
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
            crisp
            aspect="aspect-[4/5] md:aspect-auto md:h-[28rem] lg:h-[34rem]"
            className="col-span-12 md:col-span-4"
          />
        </div>
      )}
    </Section>
  );
}
