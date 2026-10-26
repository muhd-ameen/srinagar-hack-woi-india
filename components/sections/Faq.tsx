import { copy, site } from "@/content/site";
import { faqs } from "@/content/faq";
import { MoreLink } from "../MoreLink";
import { Section } from "../Section";
import { SectionHeading, type SectionVariant } from "../SectionHeading";
import { FaqList } from "./FaqList";

// How many questions the home page summary shows before linking to the full list.
const summaryCount = 4;

export function Faq({ number, summary, level = 2 }: SectionVariant) {
  return (
    <Section id="faq" first={level === 1}>
      <SectionHeading id="faq" number={number} level={level} label={copy.faq.label} heading={copy.faq.heading} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-9 lg:col-start-4">
          <FaqList items={summary ? faqs.slice(0, summaryCount) : faqs} />
          {summary ? (
            <MoreLink href={copy.faq.href} label={copy.faq.more} className="mt-8" />
          ) : (
            <p className="mt-8 text-base text-muted">
              {copy.faq.ask}{" "}
              <a href={site.links.woi.href} className="link-underline text-fg">
                {site.links.woi.label}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
