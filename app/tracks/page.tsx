import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { Tracks } from "@/components/sections/Tracks";
import { copy } from "@/content/site";

export const metadata: Metadata = {
  title: copy.tracks.label,
  description: copy.tracks.description,
  alternates: { canonical: copy.tracks.href },
};

export default function TracksPage() {
  return (
    <>
      <Tracks level={1} />
      <FinalCta />
    </>
  );
}
