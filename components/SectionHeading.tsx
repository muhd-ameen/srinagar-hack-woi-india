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
  className?: string;
};

export function sectionLabel(number: number | undefined, label: string) {
  return number === undefined ? label : `${String(number).padStart(2, "0")} · ${label}`;
}

// A sticker tag with the section label, then the display heading and an optional intro.
export function SectionHeading({ id, number, label, heading, level = 2, children, className = "" }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className={className} data-reveal>
      {label && <p className="tag">{sectionLabel(number, label)}</p>}
      <Heading
        id={`${id}-heading`}
        className={`display max-w-[20ch] text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl ${label ? "mt-6" : ""}`}
      >
        {heading}
      </Heading>
      {children && <div className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">{children}</div>}
    </header>
  );
}
