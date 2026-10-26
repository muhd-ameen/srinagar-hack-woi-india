import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { rules } from "@/content/pages";

export const metadata: Metadata = {
  title: rules.label,
  description: rules.intro,
  alternates: { canonical: "/rules" },
};

export default function RulesPage() {
  return <ProsePage page={rules} />;
}
