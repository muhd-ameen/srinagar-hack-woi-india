import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Container } from "@/components/Container";
import { Monitor } from "@/components/brand/Monitor";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.notFound.heading,
};

export default function NotFound() {
  return (
    <section className="tone-sky bg-grid py-20 md:py-32">
      <Container className="grid grid-cols-12 items-center gap-x-6 gap-y-12 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-7">
          <p className="tag bg-paper">{copy.notFound.label}</p>
          <h1 className="display mt-6 max-w-[14ch] text-[clamp(3rem,9vw,6.5rem)] leading-none">{copy.notFound.heading}</h1>
          <p className="mt-8 max-w-[50ch] text-lg">{copy.notFound.body}</p>
          <Link href="/" className="btn group mt-10 h-14 px-7 text-base">
            <span>{copy.notFound.back}</span>
            <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>
        <Monitor className="col-span-8 col-start-3 h-auto w-full sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-9" />
      </Container>
    </section>
  );
}
