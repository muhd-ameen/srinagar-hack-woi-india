// The pixel sprout from the TGIH app icon and monitor illustration, traced on a 12 x 12
// grid as one shape: a square leaf on the right, a stepped leaf on the left, and the stem.
export const sproutPath = "M7 2H11V4H10V5H8V11H6V8H4V7H3V6H2V5H1V3H4V4H5V5H6V4H7Z";

type Props = {
  x?: number;
  y?: number;
  size?: number;
  // Outline width in grid units. Only the outer half shows (paint-order: stroke).
  stroke?: number;
};

// Renders inside a parent <svg>. `size` is the width and height in the parent's units.
export function SproutShape({ x = 0, y = 0, size = 12, stroke = 0.9 }: Props) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 12 12" overflow="visible">
      <path
        d={sproutPath}
        fill="var(--color-green)"
        stroke="var(--color-ink)"
        strokeWidth={stroke * 2}
        strokeLinejoin="miter"
        paintOrder="stroke"
      />
    </svg>
  );
}
