// Wavy top edge for a coloured section, like the blob edges on the guideline pages.
// Sits just above the section, in the section's own colour and pattern, with an ink line
// along the curve. The section must be `relative`.

const curve =
  "M0 30 C120 6 240 4 360 22 S600 52 720 34 S960 2 1080 16 S1320 50 1440 26";
const shape = `${curve} V48 H0 Z`;

const mask = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 48' preserveAspectRatio='none'><path d='${shape}'/></svg>`,
)}")`;

type Props = {
  // The section's tone and pattern classes, e.g. "tone-sky bg-grid".
  className: string;
  flip?: boolean;
};

export function Wave({ className, flip = false }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-full h-8 md:h-12 ${flip ? "-scale-x-100" : ""}`}
    >
      <div
        className={`wave absolute inset-0 ${className}`}
        style={{ maskImage: mask, WebkitMaskImage: mask, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }}
      />
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <path d={curve} fill="none" stroke="var(--color-ink)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
