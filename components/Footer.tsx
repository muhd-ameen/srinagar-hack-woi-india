import Image from "next/image";
import Link from "next/link";
import { copy, site } from "@/content/site";
import { Container } from "./Container";
import { SocialIcon } from "./SocialIcon";
import { AppIcon } from "./brand/AppIcon";
import { PixelPlus, PixelStairs } from "./brand/Shapes";
import { Wave } from "./brand/Wave";

export function Footer() {
  const socials = site.socials.filter((social) => social.href);
  const externalLinks = [site.links.woi, site.links.gism];

  return (
    <footer className="tone-deep relative">
      <Wave className="tone-deep" flip />
      <PixelStairs className="pointer-events-none absolute right-0 bottom-0 hidden h-40 w-52 md:block" />
      <PixelPlus className="float pointer-events-none absolute top-16 right-[8%] hidden size-7 md:block" color="var(--color-sky)" shade="var(--color-sun)" />

      <Container className="relative py-16 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4">
              <AppIcon className="size-14" />
              <span className="flex flex-col leading-none">
                <span className="display text-2xl text-sun">{site.name}</span>
                <span className="mt-1.5 text-xs font-bold tracking-[0.08em] uppercase">{site.edition}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[32ch] text-lg">{site.tagline}</p>

            {/* Organiser and campaign marks, on a paper card so the full-colour logos read. */}
            <div className="card mt-8 inline-flex flex-wrap items-center gap-6 px-5 py-4">
              <span className="label-muted">{copy.footer.byLabel}</span>
              <Image src="/logos/woi-logo-onLight.png" alt="WOI India" width={600} height={224} className="h-8 w-auto" />
              <Image
                src="/logos/gism-badge.png"
                alt="The Great Indian Startup Month 2026"
                width={560}
                height={670}
                className="h-12 w-auto"
              />
            </div>
          </div>

          <nav aria-label="Footer" className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-7">
            <h2 className="label text-sun">{copy.footer.linksHeading}</h2>
            <ul className="mt-4 space-y-2.5 text-base">
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
              <h2 className="label text-sun">{copy.footer.socialsHeading}</h2>
              <ul className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={`WOI India on ${social.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn size-11 bg-paper"
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t-2 border-cream/40 pt-6 text-sm sm:flex-row sm:justify-between md:pr-56">
          <p>{site.copyright}</p>
          <p>
            {site.fullName} ·{" "}
            <a href={site.links.gism.href} className="link-underline">
              {site.programme}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
