import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Container } from "@/components/Container";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.notFound.heading,
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-40">
      <Container>
        <p className="label">{copy.notFound.label}</p>
        <h1 className="mt-6 max-w-[14ch] text-[clamp(3rem,9vw,7rem)] leading-none font-medium tracking-tightest">
          {copy.notFound.heading}
        </h1>
        <p className="mt-8 max-w-[50ch] text-lg text-muted">{copy.notFound.body}</p>
        <Link href="/" className="group mt-10 inline-flex items-center gap-2 text-base font-normal">
          <span className="link-underline">{copy.notFound.back}</span>
          <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
