import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { codeOfConduct } from "@/content/pages";

export const metadata: Metadata = {
  title: codeOfConduct.label,
  description: codeOfConduct.intro,
  alternates: { canonical: "/code-of-conduct" },
};

export default function CodeOfConductPage() {
  return <ProsePage page={codeOfConduct} />;
}
