import type { ReactNode } from "react";
import { Container } from "./Container";
import { Wave } from "./brand/Wave";

export type Tone = "cream" | "paper" | "sky" | "sun" | "deep";

// Each tone's background, plus its pattern from the guidelines' background system.
export const toneClasses: Record<Tone, string> = {
  cream: "tone-cream",
  paper: "tone-paper",
  sky: "tone-sky bg-grid",
  sun: "tone-sun bg-dots",
  deep: "tone-deep",
};

type Props = {
  id: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
  // The section that opens a sub page: no wave (the nav sits above) and less space above.
  first?: boolean;
  // Wavy top edge. Leave off when the section above has the same tone.
  wave?: boolean;
};

// A page section in one of the brand tones, with the standard vertical rhythm.
export function Section({ id, children, tone = "cream", className = "", first = false, wave = true }: Props) {
  const spacing = first ? "pt-14 pb-20 md:pt-20 md:pb-28 lg:pb-32" : "py-20 md:py-28 lg:py-32";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative ${toneClasses[tone]} ${spacing} ${className}`}
    >
      {wave && !first && <Wave className={toneClasses[tone]} />}
      <Container>{children}</Container>
    </section>
  );
}
