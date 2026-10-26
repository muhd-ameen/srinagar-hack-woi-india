import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Organisers } from "@/components/sections/Organisers";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.about.label,
  description: copy.about.description,
  alternates: { canonical: copy.about.href },
};

export default function AboutPage() {
  return (
    <>
      <About level={1} />
      <Organisers />
      <FinalCta />
    </>
  );
}
