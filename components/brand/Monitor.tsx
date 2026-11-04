import { SproutShape } from "./Sprout";

type Props = {
  className?: string;
};

const screen = { x: 70, y: 62, w: 260, h: 184 };
const dots: [number, number][] = [];
for (let y = screen.y + 14; y < screen.y + screen.h - 6; y += 16) {
  for (let x = screen.x + 14; x < screen.x + screen.w - 6; x += 16) dots.push([x, y]);
}

// The retro monitor from the guidelines' cover and illustration pages: chunky outlines,
// flat fills, a dot-grid screen with the pixel sprout. Drawn from the moodboard; replace
// with the official illustration file when we have it.
export function Monitor({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 400 380" aria-hidden="true" className={className}>
      {/* Motion lines */}
      <g fill="var(--color-sun)" stroke="var(--color-ink)" strokeWidth="4" strokeLinejoin="round">
        <rect x="6" y="40" width="40" height="13" rx="3" transform="rotate(-28 26 46)" />
        <rect x="40" y="2" width="13" height="40" rx="3" transform="rotate(-22 46 22)" />
      </g>

      {/* Stand */}
      <path d="M128 368 L272 368 L256 330 L144 330 Z" fill="var(--color-coral)" stroke="var(--color-ink)" strokeWidth="6" strokeLinejoin="round" />
      <rect x="172" y="282" width="56" height="52" fill="var(--color-coral)" stroke="var(--color-ink)" strokeWidth="6" />

      {/* Body, with a hard shadow */}
      <rect x="52" y="44" width="320" height="252" rx="30" fill="var(--color-ink)" />
      <rect x="40" y="32" width="320" height="252" rx="30" fill="var(--color-deep)" stroke="var(--color-ink)" strokeWidth="6" />
      <path d="M62 120 V70 Q62 54 78 54 H170" fill="none" stroke="var(--color-sky)" strokeWidth="8" strokeLinecap="round" />

      {/* Screen */}
      <rect x={screen.x} y={screen.y} width={screen.w} height={screen.h} rx="12" fill="var(--color-sun)" stroke="var(--color-ink)" strokeWidth="6" />
      <g fill="var(--color-green)">
        {dots.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" />
        ))}
      </g>
      <SproutShape x={128} y={76} size={150} stroke={0.4} />
    </svg>
  );
}
