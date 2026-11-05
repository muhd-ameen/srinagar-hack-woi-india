import Image from "next/image";
import { copy, site } from "@/content/site";
import { partners } from "@/content/partners";
import { Container } from "../Container";
import { Section } from "../Section";

// Confirmed partners only. While the list is empty this renders a short contact block instead.
export function Partners() {
  if (partners.length === 0) {
    return (
      <aside aria-label={copy.partners.heading} className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 lg:gap-x-8" data-reveal>
            <p className="label-muted col-span-12 pt-2 lg:col-span-3">{copy.partners.heading}</p>
            <div className="col-span-12 lg:col-span-9">
              <p className="text-2xl font-medium tracking-tight md:text-3xl">{copy.partners.emptyHeading}</p>
              <p className="mt-3 max-w-[60ch] text-base text-muted md:text-lg">
                {copy.partners.emptyBody}{" "}
                <a href={site.links.woi.href} className="link-underline text-fg">
                  {site.links.woi.label}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </aside>
    );
  }

  return (
    <Section id="partners">
      <header className="text-center" data-reveal>
        <p className="label-muted">{copy.partners.heading}</p>
        <h2
          id="partners-heading"
          className="mx-auto mt-4 max-w-[14ch] text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {copy.partners.gridHeading}
        </h2>
      </header>

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-20 lg:grid-cols-5 lg:gap-6">
        {partners.map((partner) => {
          const card = "flex h-full flex-col items-center gap-5 rounded-lg border border-line px-4 py-8 text-center";
          const content = (
            <>
              <span className="flex h-20 w-full items-center justify-center">
                <Image
                  src={partner.logo}
                  alt=""
                  width={partner.width}
                  height={partner.height}
                  sizes="184px"
                  className="h-auto max-h-20 w-auto max-w-[80%] object-contain"
                />
              </span>
              <span className="text-sm font-medium">{partner.name}</span>
            </>
          );
          return (
            <li key={partner.name} data-reveal>
              {partner.href ? (
                <a
                  href={partner.href}
                  className={`${card} transition-colors duration-150 hover:border-fg/30 hover:bg-surface`}
                >
                  {content}
                </a>
              ) : (
                <div className={card}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
