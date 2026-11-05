import Image from "next/image";
import { copy, site } from "@/content/site";
import { Container } from "../Container";
import { RegisterButton } from "../RegisterButton";
import { WaitlistForm } from "../WaitlistForm";

const { image } = copy.finalCta;

// Heading and sign-up on the left, campaign badge on the right. On mobile the badge sits below.
export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line py-24 md:py-36 lg:py-44">
      <Container>
        <div data-reveal className="grid grid-cols-12 items-center gap-x-6 gap-y-16 lg:gap-x-8">
          <div className="col-span-12 min-w-0 lg:col-span-8">
            <h2
              id="cta-heading"
              className="max-w-[14ch] text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[1.02] font-medium tracking-tightest text-balance"
            >
              {copy.finalCta.heading}
            </h2>
            {!site.registrationOpen && site.waitlist.enabled ? (
              <div className="mt-12 max-w-xl">
                <WaitlistForm />
                <p className="mt-6 text-sm text-muted">
                  {site.city} · {site.dates ?? site.month} · {site.cost}
                </p>
              </div>
            ) : (
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <RegisterButton />
                <p className="text-sm text-muted">
                  {site.city} · {site.dates ?? site.month} · {site.cost}
                </p>
              </div>
            )}
          </div>
          <div className="col-span-8 col-start-3 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-9">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, 60vw"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
