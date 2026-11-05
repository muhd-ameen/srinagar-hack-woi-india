import type { ReactNode } from "react";

// How a section is shown. On the home page: a numbered summary that links to its own page.
// On a sub page: in full, with `level` 1 for the section that opens the page.
export type SectionVariant = {
  number?: number;
  summary?: boolean;
  level?: 1 | 2;
};

type Props = {
  id: string;
  number?: number;
  label?: string;
  heading: string;
  level?: 1 | 2;
  children?: ReactNode;
};

export function sectionLabel(number: number | undefined, label: string) {
  return number === undefined ? label : `${String(number).padStart(2, "0")} / ${label}`;
}

// Label in the narrow left column, heading (and optional intro) on the right.
export function SectionHeading({ id, number, label, heading, level = 2, children }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className="grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-x-8" data-reveal>
      {label && (
        <p className="label col-span-12 pt-3 lg:col-span-3">{sectionLabel(number, label)}</p>
      )}
      <div className={`col-span-12 ${label ? "lg:col-span-9" : ""}`}>
        <Heading
          id={`${id}-heading`}
          className="max-w-[18ch] text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {heading}
        </Heading>
        {children && (
          <div className="mt-6 max-w-[65ch] text-base text-muted md:text-lg">{children}</div>
        )}
      </div>
    </header>
  );
}
