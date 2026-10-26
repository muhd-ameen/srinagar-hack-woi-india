import { copy, site } from "@/content/site";
import { schedule } from "@/content/schedule";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";
import { ScheduleTabs } from "./ScheduleTabs";

export function Schedule({ number, level = 2 }: SectionVariant) {
  return (
    <Section id="schedule" first={level === 1}>
      <SectionHeading id="schedule" number={number} level={level} label={copy.schedule.label} heading={copy.schedule.heading} />

      {/* On the schedule page: a full-width band under the heading. */}
      {level === 1 && (
        <Photo
          photo={images.format}
          sizes="100vw"
          preload
          fade
          bleed
          aspect="aspect-[16/9] md:aspect-[21/9]"
          className="mt-12 md:mt-16"
        />
      )}

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-9 lg:col-start-4" data-reveal>
          {schedule.length > 0 ? (
            <ScheduleTabs days={schedule} />
          ) : (
            <div className="border-y border-line py-10">
              <p className="text-xl font-normal md:text-2xl">{copy.schedule.empty}</p>
              <p className="mt-3 text-sm text-muted">{site.dates ?? site.datesPending}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
