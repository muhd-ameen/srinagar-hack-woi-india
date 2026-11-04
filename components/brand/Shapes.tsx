// Graphic elements from the "Pixel Language" page of the guidelines. All decorative.

type ShapeProps = {
  className?: string;
};

// Four-point sparkle with an ink outline.
export function Sparkle({ className = "", fill = "var(--color-sun)" }: ShapeProps & { fill?: string }) {
  return (
    <svg viewBox="-2 -2 28 28" aria-hidden="true" className={className}>
      <path
        d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"
        fill={fill}
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Pixel plus: five squares, with the lower-right arms in a darker shade.
export function PixelPlus({
  className = "",
  color = "var(--color-sun)",
  shade = "var(--color-green)",
}: ShapeProps & { color?: string; shade?: string }) {
  return (
    <svg viewBox="0 0 3 3" aria-hidden="true" shapeRendering="crispEdges" className={className}>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="1" height="1" fill={color} />
      <rect x="1" y="1" width="1" height="1" fill={color} />
      <rect x="2" y="1" width="1" height="1" fill={shade} />
      <rect x="1" y="2" width="1" height="1" fill={shade} />
    </svg>
  );
}

// A loose cluster of pixels, like the ones floating on the guideline covers.
export function PixelScatter({ className = "", color = "var(--color-paper)" }: ShapeProps & { color?: string }) {
  return (
    <svg viewBox="0 0 4 4" aria-hidden="true" shapeRendering="crispEdges" className={className}>
      <rect x="2" y="0" width="1" height="1" fill={color} />
      <rect x="1" y="1" width="1" height="1" fill={color} opacity="0.7" />
      <rect x="0" y="2" width="1" height="1" fill={color} />
      <rect x="1" y="3" width="1" height="1" fill={color} opacity="0.5" />
    </svg>
  );
}

// Pixel staircase rising to the right.
export function PixelStairs({ className = "", color = "var(--color-sun)" }: ShapeProps & { color?: string }) {
  return (
    <svg viewBox="0 0 5 4" aria-hidden="true" preserveAspectRatio="xMaxYMax meet" className={className}>
      <path
        d="M0 4V3H1V2H2V1H3V0H5V4Z"
        fill={color}
        stroke="var(--color-ink)"
        strokeWidth="0.08"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Pixel arrow cursor.
export function PixelCursor({ className = "" }: ShapeProps) {
  return (
    <svg viewBox="0 0 12 16" aria-hidden="true" shapeRendering="crispEdges" className={className}>
      <path
        d="M1 1V14H3V13H4V12H5V14H6V16H8V14H7V12H6V11H10V10H9V9H8V8H7V7H6V6H5V5H4V4H3V3H2V1Z"
        fill="var(--color-sun)"
        stroke="var(--color-ink)"
        strokeWidth="1"
      />
    </svg>
  );
}
