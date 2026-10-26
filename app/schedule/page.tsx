import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Schedule } from "@/components/sections/Schedule";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.schedule.label,
  description: copy.schedule.description,
  alternates: { canonical: copy.schedule.href },
};

export default function SchedulePage() {
  return (
    <>
      <Schedule level={1} />
      <FinalCta />
    </>
  );
}
