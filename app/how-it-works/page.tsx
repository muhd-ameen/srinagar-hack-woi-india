import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Format } from "@/components/sections/Format";
import { Judging } from "@/components/sections/Judging";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.format.pageTitle,
  description: copy.format.description,
  alternates: { canonical: copy.format.href },
};

export default function HowItWorksPage() {
  return (
    <>
      <Format level={1} />
      <Judging />
      <FinalCta />
    </>
  );
}
