import { copy, site } from "@/content/site";
import { schedule } from "@/content/schedule";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";
import { ScheduleTabs } from "./ScheduleTabs";

export function Schedule({ number, level = 2 }: SectionVariant) {
  return (
    <Section id="schedule" tone="cream" first={level === 1}>
      <SectionHeading id="schedule" number={number} level={level} label={copy.schedule.label} heading={copy.schedule.heading} />

      {/* On the schedule page: a full-width band under the heading. */}
      {level === 1 && (
        <Photo
          photo={images.format}
          sizes="(min-width: 1280px) 1200px, 100vw"
          preload
          aspect="aspect-[16/9] md:aspect-[21/9]"
          className="mt-12 md:mt-16"
        />
      )}

      <div className="mt-12 md:mt-16">
        <div data-reveal>
          {schedule.length > 0 ? (
            <ScheduleTabs days={schedule} />
          ) : (
            <div className="card fill-sky p-6 md:p-10">
              <p className="display text-2xl md:text-3xl">{copy.schedule.empty}</p>
              <p className="mt-3 text-base font-bold">{site.dates ?? site.datesPending}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
