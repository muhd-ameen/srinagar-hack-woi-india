import { copy, site } from "@/content/site";
import { Container } from "../Container";
import { RegisterButton } from "../RegisterButton";
import { WaitlistForm } from "../WaitlistForm";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line py-24 md:py-36 lg:py-44">
      <Container>
        <div data-reveal>
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
      </Container>
    </section>
  );
}
