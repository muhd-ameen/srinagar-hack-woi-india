import type { ProsePage as ProsePageData } from "@/content/pages";
import { Container } from "./Container";
import { PixelPlus } from "./brand/Shapes";
import { Wave } from "./brand/Wave";

type Props = {
  page: ProsePageData;
};

// Shared layout for long text pages (Code of Conduct, Rules): a sky header band, then the
// sections as cards on cream.
export function ProsePage({ page }: Props) {
  return (
    <article>
      <header className="tone-sky bg-grid relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
        <PixelPlus className="float absolute top-12 right-[6%] size-9" />
        <Container>
          <p className="tag bg-paper">{page.label}</p>
          <h1 className="display mt-6 text-[clamp(3rem,9vw,6.5rem)] leading-none">{page.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lg md:text-xl">{page.intro}</p>
          <p className="mt-4 text-sm font-bold">{page.updated}</p>
        </Container>
      </header>

      <div className="tone-cream relative pt-16 pb-24 md:pt-20 md:pb-32">
        <Wave className="tone-cream" />
        <Container>
          <div className="space-y-6">
            {page.sections.map((section) => (
              <section key={section.heading} className="card grid grid-cols-1 gap-4 p-6 md:p-10 lg:grid-cols-12 lg:gap-x-8">
                <h2 className="display text-2xl leading-snug lg:col-span-4">{section.heading}</h2>
                <div className="max-w-[65ch] space-y-4 text-base md:text-lg lg:col-span-8">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span aria-hidden="true" className="mt-[0.5em] size-2.5 shrink-0 border-2 border-ink bg-sun" />
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
      </div>
    </article>
  );
}
