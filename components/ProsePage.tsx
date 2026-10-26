import type { ProsePage as ProsePageData } from "@/content/pages";
import { Container } from "./Container";

type Props = {
  page: ProsePageData;
};

// Shared layout for long text pages (Code of Conduct, Rules).
export function ProsePage({ page }: Props) {
  return (
    <article className="pt-12 pb-24 md:pt-20 md:pb-36">
      <Container>
        <p className="label">{page.label}</p>
        <h1 className="mt-6 text-[clamp(3rem,9vw,7rem)] leading-none font-medium tracking-tightest">
          {page.title}
        </h1>
        <div className="mt-10 grid grid-cols-12 gap-x-6 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-4">
            <p className="max-w-[60ch] text-lg md:text-xl">{page.intro}</p>
            <p className="mt-4 text-sm text-muted">{page.updated}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-line md:mt-24">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-line py-10 md:py-14 lg:gap-x-8"
            >
              <h2 className="col-span-12 text-xl leading-snug font-medium lg:col-span-3">{section.heading}</h2>
              <div className="col-span-12 max-w-[65ch] space-y-4 text-base text-muted md:text-lg lg:col-span-8 lg:col-start-4">
                {section.body?.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
