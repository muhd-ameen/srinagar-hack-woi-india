import { Sparkle } from "./Shapes";

type Props = {
  className?: string;
};

// Type-set stand-in for the TGIH primary logo: stacked lettering in the display face with
// the logo's ink outline and drop shadow, and sparkles either side of "THE".
// Swap for the official logo artwork (SVG) when Hafiz shares it; keep the text alternative.
// Size it with font-size on `className`.
export function Logo({ className = "" }: Props) {
  return (
    <span className={`display inline-flex flex-col items-center text-center leading-[0.86] uppercase ${className}`}>
      <span className="flex items-center gap-[0.12em] text-[0.42em]">
        <Sparkle className="h-[0.9em] w-[0.9em]" />
        <span className="display-outline text-cream">The</span>
        <Sparkle className="h-[0.9em] w-[0.9em]" />
      </span>
      <span className="display-outline text-sun">Great</span>
      <span className="display-outline text-[0.94em] text-cream">Indian</span>
      <span className="display-outline text-[0.74em] text-sun">Hackathon</span>
    </span>
  );
}
