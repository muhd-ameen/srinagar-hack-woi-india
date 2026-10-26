import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  // The section that opens a sub page: no top rule (the nav has one) and less space above.
  first?: boolean;
};

// A page section: a 1px rule on top and the standard vertical rhythm.
export function Section({ id, children, className = "", first = false }: Props) {
  const spacing = first
    ? "pt-12 pb-20 md:pt-20 md:pb-28 lg:pb-36"
    : "border-t border-line py-20 md:py-28 lg:py-36";
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`${spacing} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
