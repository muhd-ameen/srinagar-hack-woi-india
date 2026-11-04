import Image from "next/image";
import { copy, site } from "@/content/site";
import { Container } from "../Container";
import { RegisterButton } from "../RegisterButton";
import { WaitlistForm } from "../WaitlistForm";
import { PixelCursor, PixelPlus, Sparkle } from "../brand/Shapes";
import { Wave } from "../brand/Wave";

const { image } = copy.finalCta;

// Sky pixel grid, heading and sign-up on the left, the campaign badge on a sticker card on
// the right. On mobile the badge sits below.
export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="tone-sky bg-grid relative py-24 md:py-32">
      <Wave className="tone-sky bg-grid" />
      <PixelPlus className="float absolute top-16 left-[4%] hidden size-9 md:block" />
      <PixelPlus className="float float-delay absolute right-[5%] bottom-16 size-8" color="var(--color-paper)" shade="var(--color-deep)" />

      <Container>
        <div data-reveal className="grid grid-cols-12 items-center gap-x-6 gap-y-14 lg:gap-x-8">
          <div className="col-span-12 min-w-0 lg:col-span-7">
            <h2 id="cta-heading" className="display max-w-[14ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.02] text-balance">
              {copy.finalCta.heading}
            </h2>
            <div className="card mt-10 max-w-xl p-6 md:p-8">
              {!site.registrationOpen && site.waitlist.enabled ? (
                <WaitlistForm />
              ) : (
                <RegisterButton />
              )}
              <p className="mt-5 text-sm font-bold">
                {site.city} · {site.dates ?? site.month} · {site.cost}
              </p>
            </div>
          </div>

          <div className="relative col-span-10 col-start-2 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-9">
            <div className="card rotate-2 bg-white p-6">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="mx-auto h-auto w-full max-w-sm"
              />
            </div>
            <Sparkle className="float absolute -top-5 -left-5 size-12" />
            <PixelCursor className="absolute -right-3 -bottom-6 h-12 w-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
