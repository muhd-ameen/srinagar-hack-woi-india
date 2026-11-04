import { copy } from "@/content/site";
import { images } from "@/content/images";
import { MoreLink } from "../MoreLink";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { sectionLabel, type SectionVariant } from "../SectionHeading";
import { PixelPlus } from "../brand/Shapes";

// One fill per stat, cycling through the palette.
const statFills = ["fill-sun", "fill-sky", "fill-coral", "fill-green"];

export function About({ number, summary, level = 2 }: SectionVariant) {
  const { about } = copy;
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <Section id="about" tone="cream" first={level === 1}>
      <PixelPlus className="float absolute top-24 right-[6%] hidden size-9 lg:block" color="var(--color-coral)" shade="var(--color-deep)" />
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8" data-reveal>
        <div className="col-span-12 lg:col-span-6">
          <p className="tag">{sectionLabel(number, about.label)}</p>
          <Heading
            id="about-heading"
            className="display mt-6 max-w-[16ch] text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
          >
            {about.heading}
          </Heading>
        </div>
        <div className="col-span-12 max-w-[60ch] space-y-6 text-lg md:text-xl lg:col-span-5 lg:col-start-8 lg:pt-14">
          {about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          {summary && <MoreLink href={about.href} label={about.more} />}
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-4 md:mt-20 lg:grid-cols-4 lg:gap-6" data-reveal>
        {about.stats.map((stat, i) => (
          <div key={stat.label} className={`card px-5 py-6 lg:px-6 lg:py-8 ${statFills[i % statFills.length]}`}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="display block text-[clamp(1.75rem,7.5vw,3rem)] leading-none">{stat.value}</span>
              <span className="mt-3 block text-sm font-bold">{stat.label}</span>
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
            aspect="aspect-[4/3] md:aspect-auto md:h-[28rem] lg:h-[34rem]"
            tilt="left"
            className="col-span-12 md:col-span-8"
          />
          <Photo
            photo={images.aboutPlace}
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
            aspect="aspect-[4/5] md:aspect-auto md:h-[28rem] lg:h-[34rem]"
            tilt="right"
            className="col-span-12 md:col-span-4"
          />
        </div>
      )}
    </Section>
  );
}
