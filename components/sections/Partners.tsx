import Image from "next/image";
import { copy, site } from "@/content/site";
import { partners } from "@/content/partners";
import { Container } from "../Container";
import { Section } from "../Section";

// Confirmed partners only. While the list is empty this renders a short contact card instead.
export function Partners() {
  if (partners.length === 0) {
    return (
      <aside aria-label={copy.partners.heading} className="tone-cream pb-20 md:pb-28">
        <Container>
          <div className="card fill-sky p-6 md:p-10" data-reveal>
            <p className="tag bg-paper">{copy.partners.heading}</p>
            <p className="display mt-6 text-3xl md:text-4xl">{copy.partners.emptyHeading}</p>
            <p className="mt-3 max-w-[60ch] text-lg">
              {copy.partners.emptyBody}{" "}
              <a href={site.links.woi.href} className="link-underline font-bold">
                {site.links.woi.label}
              </a>
              .
            </p>
          </div>
        </Container>
      </aside>
    );
  }

  return (
    <Section id="partners" tone="paper">
      <header className="text-center" data-reveal>
        <p className="tag">{copy.partners.heading}</p>
        <h2 id="partners-heading" className="display mx-auto mt-6 max-w-[16ch] text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
          {copy.partners.gridHeading}
        </h2>
      </header>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-16 lg:grid-cols-5 lg:gap-6">
        {partners.map((partner) => {
          // Logos need a white backdrop; the card keeps the brand outline and shadow.
          const card = "card flex h-full flex-col items-center gap-4 bg-white px-4 py-7 text-center";
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
              <span className="text-sm font-bold">{partner.name}</span>
            </>
          );
          return (
            <li key={partner.name} data-reveal>
              {partner.href ? (
                <a href={partner.href} className={`${card} transition-transform duration-150 hover:-translate-y-1 hover:rotate-1`}>
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
