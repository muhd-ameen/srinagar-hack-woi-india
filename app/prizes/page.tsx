import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Prizes } from "@/components/sections/Prizes";
import { WhatStays } from "@/components/sections/WhatStays";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.prizes.label,
  description: copy.prizes.description,
  alternates: { canonical: copy.prizes.href },
};

export default function PrizesPage() {
  return (
    <>
      <Prizes level={1} />
      <WhatStays />
      <FinalCta />
    </>
  );
}
