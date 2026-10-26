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
        <ul className="col-span-12 grid grid-cols-1 border-t border-line md:grid-cols-3 lg:col-span-9 lg:col-start-4">
          {organisers.map((org, i) => (
            <li
              key={org.name}
              className={`border-b border-line py-8 md:border-b-0 md:pr-6 ${i > 0 ? "md:border-l md:pl-6" : ""}`}
              data-reveal
            >
              <p className="label-muted">{org.role}</p>
              {org.logo && (
                <div className="mt-5 w-32">
                  <Image
                    src={org.logo.src}
                    alt={org.logo.alt}
                    width={org.logo.width}
                    height={org.logo.height}
                    sizes="144px"
                    className="h-auto w-full"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl leading-snug font-medium">{org.name}</h3>
              <p className="mt-3 text-sm text-muted">{org.about}</p>
              {org.href && (
                <a href={org.href} className="link-underline mt-4 inline-block text-sm">
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
