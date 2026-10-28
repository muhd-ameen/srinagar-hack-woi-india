import Image from "next/image";
import { copy } from "@/content/site";
import { organisers } from "@/content/team";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function Organisers() {
  return (
    <Section id="organisers">
      <SectionHeading id="organisers" label={copy.organisers.label} heading={copy.organisers.heading} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20 lg:gap-x-8">
        {/* Two columns on tablets, four on wide screens. Each card has its own top rule so
            the grid works for any number of organisers. */}
        <ul className="col-span-12 grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:col-span-9 lg:col-start-4 xl:grid-cols-4">
          {organisers.map((org) => (
            <li key={org.name} className="border-t border-line py-8" data-reveal>
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
              <h3 className="mt-4 text-xl leading-snug font-medium">{org.name}</h3>
              <p className="mt-3 text-sm text-muted">{org.about}</p>
              {org.href && (
                <a href={org.href} className="link-underline mt-4 inline-block text-sm [overflow-wrap:anywhere]">
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
