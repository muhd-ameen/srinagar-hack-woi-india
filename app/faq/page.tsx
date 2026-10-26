import type { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.faq.label,
  description: copy.faq.description,
  alternates: { canonical: copy.faq.href },
};

export default function FaqPage() {
  return (
    <>
      <Faq level={1} />
      <FinalCta />
    </>
  );
}
