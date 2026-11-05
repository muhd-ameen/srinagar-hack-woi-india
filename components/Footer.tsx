import Link from "next/link";
import { copy, site } from "@/content/site";
import { Container } from "./Container";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const socials = site.socials.filter((social) => social.href);
  const externalLinks = [site.links.woi, site.links.gism];

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="text-2xl font-medium tracking-tight">
              {site.name}
            </Link>
            <p className="mt-2 text-base text-muted">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-7">
            <h2 className="label-muted">{copy.footer.linksHeading}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {copy.footer.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline break-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <h2 className="label-muted">{copy.footer.socialsHeading}</h2>
              <ul className="mt-4 flex gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={`WOI India on ${social.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>{site.copyright}</p>
          <p>
            {site.fullName} ·{" "}
            <a href={site.links.gism.href} className="link-underline">
              {site.programme}
            </a>{" "}
            ·{" "}
            <a href={site.links.woi.href} className="link-underline">
              WOI India
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
