import { SproutShape } from "./Sprout";

type Props = {
  className?: string;
};

const dots: [number, number][] = [];
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 6; col++) dots.push([9 + col * 6, 9 + row * 6]);
}

// The TGIH app / favicon mark: a sun-yellow tile with a dot grid and the pixel sprout.
// Placeholder drawn from the guidelines until we have the official file.
export function AppIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <rect x="2.5" y="5.5" width="43" height="40" rx="9" fill="var(--color-deep)" stroke="var(--color-ink)" strokeWidth="2.5" />
      <rect x="2.5" y="2.5" width="43" height="40" rx="9" fill="var(--color-sun)" stroke="var(--color-ink)" strokeWidth="2.5" />
      <g fill="var(--color-green)">
        {dots.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.9" />
        ))}
      </g>
      <SproutShape x={8} y={5} size={32} stroke={0.55} />
    </svg>
  );
}
