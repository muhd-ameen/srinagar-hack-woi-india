import Image from "next/image";
import { copy } from "@/content/site";
import { organisers } from "@/content/team";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function Organisers() {
  return (
    <Section id="organisers" tone="sun">
      <SectionHeading id="organisers" label={copy.organisers.label} heading={copy.organisers.heading} />

      <div className="mt-12 md:mt-16">
        {/* Two columns on tablets, four on wide screens. */}
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {organisers.map((org) => (
            <li key={org.name} className="card p-6" data-reveal>
              <p className="label-muted">{org.role}</p>
              {org.logo && (
                // Fixed-height box so tall emblems and wide wordmarks line up.
                <div className="mt-5 flex h-20 items-center">
                  <Image
                    src={org.logo.src}
                    alt={org.logo.alt}
                    width={org.logo.width}
                    height={org.logo.height}
                    sizes="144px"
                    className="h-auto max-h-20 w-auto max-w-32"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl leading-snug font-bold">{org.name}</h3>
              <p className="mt-3 text-sm text-muted">{org.about}</p>
              {org.href && (
                <a href={org.href} className="link-underline mt-4 inline-block text-sm font-bold [overflow-wrap:anywhere]">
                  {org.href.replace(/^https?:\/\//, "")}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
